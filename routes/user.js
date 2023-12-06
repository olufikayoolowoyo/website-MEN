const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/user', (req, res) => {
    res.send('Hello from Users....');
  });

  return router;
};
