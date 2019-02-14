const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// eslint-disable-next-line
const db = mongoose.connect('mongodb://localhost/heyLetsKetchup');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { PersonSchema } = require('./models/person.model');

const personRouter = require('./routes/person.router')(PersonSchema);
const groupRouter = require('./routes/groups.router');

app.use('', personRouter);
app.use('', groupRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {});
