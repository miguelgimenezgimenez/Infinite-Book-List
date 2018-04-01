const path = require('path')
const express = require('express')
// const request = require('request')

const models = require('./casumo-models/models')

const DIST_DIR = path.join(__dirname, 'dist')
const PORT = process.env.port || 8080
const app = express()
const mongoose = require('mongoose')

const config = require('./config.json')[process.env.NODE_ENV || 'development']

mongoose.Promise = global.Promise
mongoose.connect(config.mongodbUrl)

// app.get('*', (req, res) => {
//   res.sendFile(path.join(DIST_DIR, 'index.html'))
// })
models.Book.find({}).then(async (res) => {
  res.forEach(async (element) => {
    console.log(element)
    const firstLetter = element.title[0].toUpperCase()
    console.log(`Book${firstLetter}`)
    const model = models[`Book${firstLetter}`]
    console.log(model, '-----------')
    await model.create(element)
  })
})

app.listen(PORT, () => console.log('listening on port', PORT))
