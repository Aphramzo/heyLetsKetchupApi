const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserSchema } = require('../models/user.model');

const generateToken = userId => jwt.sign({ id: userId }, process.env.SECRET, {
  expiresIn: 86400, // expires in 24 hours
});

exports.register = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  UserSchema.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password: hashedPassword,
    },
    (err, user) => {
      // TODO: Better messaging around this user already exists
      if (err) return res.status(400).send(`Unable to register this user: ${err}`);
      // create a token
      // eslint-disable-next-line
      const token = generateToken(user._id);
      return res.status(200).send({
        token,
        user,
      });
    },
  );
};

exports.login = (req, res) => {
  UserSchema.findOne({ emailAddress: req.body.emailAddress }, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(401).send({ auth: false, token: null });

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    // eslint-disable-next-line
    const token = generateToken(user._id);

    return res.status(200).send({ auth: true, token });
  });
};

exports.me = (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    UserSchema.findById(decoded.id, { password: 0 }, (lookupError, user) => {
      if (lookupError) return res.status(500).send('There was a problem finding the user.');
      if (!user) return res.status(404).send('No user found.');

      return res.status(200).send(user);
    });

    return res.status(500);
  });

  return res.status(500);
};
