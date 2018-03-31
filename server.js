const path = require('path')
const express = require('express')
// const request = require('request')

const DIST_DIR = path.join(__dirname, 'dist')
const PORT = process.env.port || 8080
const app = express()
const mongoose = require('mongoose')
const config = require('./config.json')[process.env.NODE_ENV]
// const parseString = require('xml2js').parseString
const authorScraper = require('./utils/AuthorScraper')
const { Genre } = require('./models')

mongoose.Promise = global.Promise
mongoose.connect(config.mongodbUrl)

// const promises = []
// for (let index = 0; index <= 100; index++) {
//   promises.push(authorScraper.getAuthors(index))
// }
// Promise.all(promises).then((authors) => {
//   console.log(authors)
// })

const getGenres = async () => {
  const genres = await Genre.find({})
  getGenreAuthor(genres)
}

const getGenreAuthor = (genres) => {
  authorScraper.getCurrentGenreAuthors(genres.pop()).then((res) => {
    console.log(genres)
    if (genres.length) getGenreAuthor(genres)
  })
}
getGenres()

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => console.log('listening on port', PORT))
