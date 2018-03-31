const path = require('path')
const express = require('express')
// const request = require('request')
const { Book } = require('./models')

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
Book.find({}).batchSize(10).then(console.log)

app.listen(PORT, () => console.log('listening on port', PORT))
