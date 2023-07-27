import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books/bookSlice";
import { BsFillTrash3Fill } from "react-icons/bs";
const BookItem = ({book}) => {
  const dispatch = useDispatch();

  const handleClick =(e)=> {
    e.preventDefault();
    dispatch(deleteBook(book._id))
  }
  return (
    <div className='goal'>
      <h3>{book.title}</h3> 
      <h4>{book.author}</h4>
      <h5>{book.price}</h5>
      <button onClick={(e)=>handleClick(e)}><BsFillTrash3Fill/></button>
    </div>
  )
}

export default BookItem
