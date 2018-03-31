const mongoose = require('mongoose')
const Author = require('./src/Author')
const Genre = require('./src/Genre')
const Book = require('./src/Book')

mongoose.models = {}
mongoose.modelSchemas = {}

module.exports = {
  Author,
  Book,
  Genre
}
