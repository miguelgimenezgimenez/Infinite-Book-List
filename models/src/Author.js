const mongoose = require('mongoose')

const { Schema } = mongoose

const AuthorSchema = new Schema({
  goodreadsId: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    index: true
  },
  gender: {
    type: String
  }
})

module.exports = mongoose.model('Author', AuthorSchema)
