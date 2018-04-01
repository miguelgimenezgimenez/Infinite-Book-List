const path = require('path')
const express = require('express')

const DIST_DIR = path.join(__dirname, 'dist')
const PORT = process.env.port || 8080
const app = express()

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})
// eslint-disable-next-line
app.listen(PORT, () => console.log('listening on port', PORT))
