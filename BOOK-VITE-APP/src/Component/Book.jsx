import React from 'react'
import '../App.css'
const Book = ({book}) => {
  function handleClick(){
    alert("book added in cart successfully");
  }
  return (
    <div className='card'>
      <img src={book.image} width="200" height="200"/>
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  )
}

export default Book
