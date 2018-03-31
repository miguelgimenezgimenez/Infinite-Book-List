const mongoose = require('mongoose')

const { Schema } = mongoose

const BookSchema = new Schema({
  title: {
    type: String,
    index: true
  },
  author: {
    type: String,
    index: true
  },
  authorId: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String
  },
  publishedAt: {
    type: Date
  },
  genre: {
    type: String
  },
  imageUrl: {
    type: String
  }

})

module.exports = mongoose.model('Book', BookSchema)
