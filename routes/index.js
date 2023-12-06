const express = require('express');
const userRoute = require('./user');
const productRoute = require('./product');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: ' Website MEN' });
  });

  router.use('/user', userRoute());
  router.use('/product', productRoute());

  return router;
};
