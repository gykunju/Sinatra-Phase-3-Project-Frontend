import React, { useState } from 'react'

function ReviewForm({ handleSubmit, setReviewText, reviewText}) {

  return (
    <form className='form' onSubmit={handleSubmit}>
        <label>Add Review:</label>
        <textarea
            name='review'
            id='review'
            value={reviewText}
            onChange={(e)=> setReviewText(e.target.value)}
            required
        ></textarea>
        <button type="submit" className="comments-header">Submit</button>
    </form>
  )
}

export default ReviewForm