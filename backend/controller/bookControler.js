const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')
const { error } = require('console')
// @desc    Get goals
// @route   Get/api/goals
// @acces   Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({})

    res.status(200).json(books)
})

// @desc    Set goal
// @route   POSt/api/goals
// @acces   Private

const setBook = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.price) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const book = await Book.create({
        title: req.body.title,
        author:req.body.author,
        price: req.body.price
    })
    res.status(200).json(book)
})

// @desc    Update goal
// @route   PUT/api/goals/:id
// @acces   Private

const updateBook = asyncHandler(async (req, res) => {

    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        })
    res.status(200).json(updatedBook)
})

// @desc    Delete goal
// @route   DELETE/api/goals
// @acces   Private

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
  
    if (!book) {
      res.status(400)
      throw new Error('Book not found')
    }
  
    await book.deleteOne()
    res.status(200).json({ id: req.params.id })
  })


module.exports = {
    getBooks,
    setBook,
    updateBook,
    deleteBook
}