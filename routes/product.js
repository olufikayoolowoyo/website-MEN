const express = require('express');
const router = express.Router();

module.exports = () => {
  router
    .get('/', (req, res) => {
      res.send('Getting all Products....');
    })
    .get('/:id', (req, res) => {
      res.send(`Getting Product with Id ${req.params.id}....`);
    })
    .put('/:id', (req, res) => {
      res.send(`Update Product with Id ${req.params.id}....`);
    })
    .delete('/:id', (req, res) => {
      res.send(`Deleting Product with Id ${req.params.id}....`);
    })
    .post('/', (req, res) => {
      res.send('Hello from Post Product....');
    });

  return router;
};
