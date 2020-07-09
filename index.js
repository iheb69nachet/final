const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/aa', (req, res) => {
  res.sendFile('post.html');
});
app.get('/ddd', function (req, res) {
    res.send('Hello Wdddsfsfsdfdsforld!')
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))