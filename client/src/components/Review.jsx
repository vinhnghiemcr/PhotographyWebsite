import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'

const Review = ({ id, BASE_URL, setReview }) => {

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  const saveName = (e) => {
    setName(e.target.value)
  }

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
      name: name,
      description: comment,
      rating: rating,
      user: id
    }
    console.log(data, "DATA")

    const saveReview = async () => {
        console.log(`${BASE_URL}/users/${id}/reviews`, "LINK")
      await axios.post(`${BASE_URL}/users/${id}/reviews`, data).then(function (response) {
        console.log(response);
        setName('')
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
    <div>
      <h1>Leave Us A Review!</h1>
      <form onSubmit={postReview}>
        <input type="text" placeholder='Name' value={name} onChange={saveName} />
        <ReactStars  count={5}  value={rating}  onChange={saveRating} size={24} color2={'#ffd700'} />
        <textarea name="Text1" type="text" cols="40" placeholder='Leave us a comment' rows="5" value={comment} onChange={saveComment}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Review