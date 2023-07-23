import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../features/books/bookSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({ title, author, price }));
  };

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            className='form-control'
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder='Enter book title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input
            className='form-control'
            type="text"
            name="author"
            id="author"
            value={author}
            placeholder='Enter author name'
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            className='form-control'
            type="number"
            name="price"
            id="price"
            value={price}
            placeholder='Enter book price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit" >Add Book</button>
        </div>
      </form>
    </section>
  );
};

export default BookForm;
