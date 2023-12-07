const express = require('express');
const userRoute = require('./user');
const productRoute = require('./product');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('layout', {
      template: 'index',
      currentYear: `2023`,
    });
  });

  router.use('/user', userRoute(params));
  router.use('/product', productRoute(params));

  return router;
};
