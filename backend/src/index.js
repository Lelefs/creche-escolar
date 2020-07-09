const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const path = require('path');
require('dotenv/config');

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.USUARIO}:${process.env.SENHA}@cluster0-dje6c.mongodb.net/crecheescolar?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, function () {
  console.log('Bakend is running');
});
