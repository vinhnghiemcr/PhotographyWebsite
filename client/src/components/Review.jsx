import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'

const Review = ({currentUser, id, BASE_URL, setReview }) => {

  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  

  const saveComment = (e) => {
    setComment(e.target.value)
  }

  const saveRating = (e) => {
    setRating(e)
  }

  //Posting the review
  const postReview = (e) => {
    e.preventDefault() 
    const data = {
      name: currentUser.displayName,
      description: comment,
      rating: rating,
      user: id
    }
    console.log(data, "DATA")

    const saveReview = async () => {
      await axios.post(`api/users/${id}/reviews`, data).then(function (response) {
        setComment('')
        setRating(5)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    saveReview()
    setReview((c) => !c)
  }

  return (
    <div className='review'>
      <form onSubmit={postReview}>
        <h3>Leave Us A Review!</h3>
        <ReactStars  count={5}  value={rating}  onChange={saveRating} size={24} color2={'#ffd700'} />
        <textarea name="Text1" type="text" cols="40" placeholder='Leave us a comment' rows="5" value={comment} onChange={saveComment} required />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Review