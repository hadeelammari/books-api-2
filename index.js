const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/books');
const mongoose = require('mongoose')
const app = express();


require('dotenv').config()
const PORT = process.env.PORT
// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
