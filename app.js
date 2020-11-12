const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/items');

app.get('/items');

app.listen(PORT);
