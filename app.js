const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoItems = require('./mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/items', mongoItems.createItem);

app.get('/items', mongoItems.getItems);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to database...');
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.listen(PORT);
