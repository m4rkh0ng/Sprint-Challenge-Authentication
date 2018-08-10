const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  db('users')
    .insert(user)
    .then(ids => {
      db('users')
        .where({id: ids[0]})
        .first()
        .then(user => {
          const token = generateToken(user);

          res.status(201).json(token);
        })
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}`})
    })
}

function login(req, res) {
  // implement user login
  const userInfo = req.body;

  db('users')
    .where({ username: userInfo.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(userInfo.password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: `Welcome, ${user.username}`})
      } else {
        res.status(401).json({ error: "Incorrect user information. Please try again."})
      }
    })
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
