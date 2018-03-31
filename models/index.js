const mongoose = require('mongoose')
const Author = require('./src/Author')
const Genre = require('./src/Genre')

mongoose.models = {}
mongoose.modelSchemas = {}

module.exports = {
  Author,
  Genre
}
