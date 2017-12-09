const express = require('express');
const bodyParser= require('body-parser')
const app = express();

//original code
// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
