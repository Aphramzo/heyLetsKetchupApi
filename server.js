const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

require('dotenv').config();

const app = express();
// eslint-disable-next-line
const db = mongoose.connect(process.env.CONNECTION_STRING);
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const { PersonSchema } = require('./models/person.model');
const routers = require('./routes');

app.use('', routers.personRouter(PersonSchema));
app.use('', routers.groupRouter);
app.use('', routers.authRouter);
app.use('', routers.userGroupAssignmentRouter);

const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {});
