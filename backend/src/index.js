const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const path = require('path');
require('dotenv/config');

var admin = require('firebase-admin');
var firebase = require('firebase/app');
var serviceAccount = require('./config/google-credentials.js');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://creche-escolar.firebaseio.com',
});

const firebaseConfig = {
  apiKey: `${process.env.googleApiKey}`,
  authDomain: `${process.env.googleAuthDomain}`,
  databaseURL: `${process.env.googleDatabaseURL}`,
  projectId: `${process.env.googleProjectId}`,
  storageBucket: `${process.env.googleStorageBucket}`,
  messagingSenderId: `${process.env.googleMessagingSenderId}`,
  appId: `${process.env.googleAppId}`,
};

firebase.initializeApp(firebaseConfig);

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
