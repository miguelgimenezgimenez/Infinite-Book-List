const { Genre } = require('../models')
const authorScraper = require('./AuthorScraper')

const getGenres = async () => {
  const genres = await Genre.find({})
  getGenreAuthor(genres)
}

const getGenreAuthor = (genres) => {
  authorScraper.getGenresAuthors(genres.pop()).then((res) => {
    if (genres.length) getGenreAuthor(genres)
  })
}

getGenreAuthor(['mystery'])
