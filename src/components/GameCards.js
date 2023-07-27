import React, { useEffect, useRef, useState } from 'react'
import "../styles/GameCards.css"
import { fetchReviews, handleFavorite, addLikes, addReview } from './api';
import ReviewForm from './ReviewForm';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


function GameCards({id,image, name,description,site_link,company,likes,baseURL, state}) {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false); // State for the comments section visibility
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviews, setReviews] = useState([])
  const [favorite, setFavorite] = useState(state)
  const [submittedReview, setSubmittedReview] = useState(null)
  const [reviewText, setReviewText] = useState('');


  useEffect(()=>{
    if(showReviewForm){
        fetchReviews(id , baseURL)
        .then(data=>setReviews(data))
    }
  },[id, baseURL, showReviewForm])


  const handleSubmit = (e) => {
    e.preventDefault()
    addReview(id, reviewText, baseURL)
    .then(data=>{
    setReviewText("")
    setSubmittedReview(data)})
  }

  useEffect(()=>{
    if(submittedReview){
      setReviews(prevReview=> [...prevReview, submittedReview])
    }
  },[submittedReview])

  const handleLikeClick = () => {
      setLiked((prevLiked)=> !prevLiked);
      setLikeCount((prevLikeCount) => (liked ? prevLikeCount - 1 : prevLikeCount + 1));
      addLikes(id, likeCount, baseURL)
  }

  const handleAddFavorite = () =>{
    setFavorite((prevFavorite)=> !prevFavorite)
    handleFavorite(id, !favorite, baseURL)
  }

  const toggleComments = () => {
    setShowComments(!showComments); // Toggle the comments section visibility
  };

  function putReview(){
    setShowReviewForm(!showReviewForm)
  }

  return (
    <div className="card">
      <div className="card-info">
        <a href={site_link} target='_blank ' rel="noopener noreferrer">
          <img src={image} ></img>
        </a>
        <h2 className="title">{name}</h2>
        <p>{description}</p>
        <p><i>{company}</i></p><br></br>
        <div className='like-favorite'>
          <div className="likes">
            <button className={`heart-icon ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
            </button>
            <span className="like-count">{likes}</span>
          </div>
          {/* THE FAVORITE BUTTON */}
          <div className="checkbox-wrapper" >
            <button onClick={handleAddFavorite} className={state ? "favorite" : "favorite-not"}>{favorite ? "Remove from Favorites" : "Add to Favorites"}</button>
            <NavLink to="/favorites"><small style={{marginLeft:"15px"}}>go to favorites</small></NavLink>
          </div>
          </div>
          {/* REVIEW BUTTON */}
          <div className='button-div'>
          <button className="my-buttons" onClick={toggleComments}>
            {showComments ? 'Hide Reviews' : 'Reviews'}
          </button>
          <button className="my-buttons" onClick={putReview}>{showReviewForm ? "Cancel" : "Add Reviews"}</button>
          </div>
          {/* REVIEW FORM */}
          {showReviewForm &&  <ReviewForm handleSubmit={handleSubmit} setReviewText={setReviewText} reviewText={reviewText}/>}
          {/* REVIEW SECTION */}
          {showComments && (
            <div className="comments-section">
              <h4>Reviews</h4>
              {reviews.map((review) =>(
                <div key={review.id}>
                  <p style={{marginTop:"18px"}}>{review.comment}</p>
                  <hr style={{width:"280px"}}></hr>
                </div>
              ))}
              
            </div>
          )}
        </div>
      </div>
  )
}

export default GameCards