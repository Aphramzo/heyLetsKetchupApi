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
const routers = require('./routes');

app.use('', routers.personRouter(PersonSchema));
app.use('', routers.groupRouter);
app.use('', routers.authRouter);
app.use('', routers.userGroupAssignmentRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {});
