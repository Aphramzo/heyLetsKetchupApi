const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// eslint-disable-next-line
const db = mongoose.connect(process.env.CONNECTION_STRING);
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { PersonSchema } = require('./models/person.model');

const personRouter = require('./routes/person.router')(PersonSchema);
const groupRouter = require('./routes/groups.router');
const authRouter = require('./routes/auth.router');

app.use('', personRouter);
app.use('', groupRouter);
app.use('', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {});
