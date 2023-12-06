const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/product', (req, res) => {
    res.send('Hello from Products');
  });

  return router;
};
