const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {

        title: {
            type: String,
            required: [true, 'Please add a book tittle']
        },
        author: {
            type: String,
            required: [true, 'Please add a book author']
        },
        price: {
            type: Number,
            required: [true, 'Please add book price']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Book', bookSchema)
