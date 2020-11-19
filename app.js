const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoItems = require('./mongoItems');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/items', mongoItems.createItem);

app.get('/items');

app.listen(PORT);
