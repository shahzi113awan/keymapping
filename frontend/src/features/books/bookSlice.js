import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookService from './bookService';
const initialState = {
  books: [], // or some initial array of books
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};


// Create new book
export const createBook = createAsyncThunk('books/create', async (bookData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await bookService.createBook(bookData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get user books
export const getGoals = createAsyncThunk('goals/getAll', async(_, thunkAPI)=> {
   try {
    const token = thunkAPI.getState().auth.user.token;
    return await bookService.getGoals(token);
   } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
   } 
})
export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
       .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
