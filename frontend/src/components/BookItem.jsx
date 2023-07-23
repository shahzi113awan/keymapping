import React from 'react'

const BookItem = ({book}) => {
  return (
    <div className='goal'>
      <h3>{book.title}</h3> 
      <h4>{book.author}</h4>
      <h5>{book.price}</h5>
    </div>
  )
}

export default BookItem
