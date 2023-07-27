import React, { useEffect, useRef, useState } from 'react'
import "../styles/GameCards.css"
import { fetchReviews, addReview, handleFavorite, addLikes } from './api';


function GameCards({id,image, name,description,site_link,company,likes,baseURL, state}) {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false); // State for the comments section visibility
  const [showReview, setShowReview] = useState(false)
  const [reviews, setReviews] = useState([])
  const [ reviewText, setReviewText] = useState("")
  const [favorite, setFavorite] = useState(false)

  const newReviewRef = useRef()
  console.log (id)

  useEffect(()=>{
    if(showReview){
        fetchReviews(id , baseURL)
        .then(data=>setReviews(data))
    }
  },[id, baseURL, showReview])


  const handleLikeClick = () => {
      setLiked((prevLiked)=> !prevLiked);
      setLikeCount((prevLikeCount) => (liked ? prevLikeCount - 1 : prevLikeCount + 1));
      addLikes(id, likeCount, baseURL)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addReview(id, reviewText, baseURL)
  }

  const handleAddFavorite = () =>{
    setFavorite((prevFavorite)=> !prevFavorite)
    handleFavorite(id, favorite, baseURL)
  }

  const toggleComments = () => {
    setShowComments(!showComments); // Toggle the comments section visibility
  };

  function putReview(){
    setShowReview(!showReview)
  }

  return (
    <div className="card">
      <div className="card-info">
        <img src={image}/>
        <h2 className="title">{name}</h2>
        <p>{description}</p>
        <a href={site_link} >{name}.site</a>
        <p><i>{company}</i></p><br></br>
        <div className='like-favorite'>
          <div className="likes">
          <button className={`heart-icon ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              {liked ? (
                <path d="M12 4.794l-1.351-1.348-9.299 9.3 9.8 9.798 9.799-9.8-1.354-1.35-8.446 8.448z" />
              ) : (
                <path d="M12 21.975c.133-.14 8.352-8.786 8.352-12.99 0-3.688-3.01-6.686-6.71-6.686-2.345 0-4.482 1.222-5.69 3.153a6.587 6.587 0 0 0-5.674-3.153c-3.692 0-6.702 2.998-6.702 6.686 0 4.199 8.218 12.85 8.352 12.99.16.192.402.31.674.31s.512-.118.672-.31z" />
              )}
            </svg>
          </button>
          <span className="like-count">{likes}</span>
        </div>
        {/* THE FAVORITE BUTTON */}
        <div className="checkbox-wrapper" >
          <button onClick={handleAddFavorite} className={state ? "favorite" : "favorite-not"}>{state ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
        </div>
        {/* COMMENTS BUTTON */}
        <div className='button-div'>
        <button className="comments-header" onClick={toggleComments}>
          {showComments ? 'Hide Reviews' : 'Reviews'}
        </button>
        <button className="comments-header" onClick={putReview}>{showReview ? "Cancel" : "Add Reviews"}</button>
        </div>
        {showReview &&(
          <form className='form' onSubmit={handleSubmit}>
            <label>Add Review:</label>
            <textarea
              name='review'
              id='review'
              value={reviewText}
              onChange={(e)=> setReviewText(e.target.value)}
            ></textarea>
            <button className="comments-header">Submit</button>
          </form>
        )}
        {showComments && (
          <div className="comments-section">
            <h4>Reviews</h4>
            {reviews.map((review) =>(
              <div key={review.id}>
                <hr></hr>
                <p>{review.comment}</p>
                <hr></hr>
              </div>
            ))}
            
          </div>
        )}
      </div>
    </div>
  )
}

export default GameCards