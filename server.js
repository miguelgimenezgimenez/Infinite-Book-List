const express = require('express')
const cons = require('consolidate')
const path = require('path')

const app = express()

app.engine('html', cons.swig)
// view engine setup
app.set('view engine', 'html')

app.set('views', path.join(__dirname, 'www'))

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', (req, res) => res.render('index.html'))

app.listen(8080, () => {
  // eslint-disable-next-line
  console.log('Express running on http://localhost:8080')
})
