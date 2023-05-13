const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/books');
const app = express();


app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/books', booksRouter);

