const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// eslint-disable-next-line
const db = mongoose.connect('mongodb://localhost/heyLetsKetchup');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { UserSchema } = require('./models/user.model');

const userRouter = require('./routes/users.router')(UserSchema);
const groupRouter = require('./routes/groups.router');

app.use('', userRouter);
app.use('', groupRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {});
