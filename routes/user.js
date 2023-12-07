const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { userService } = params;

  router
    .get('/', async (req, res) => {
      const userList = await userService.getList();

      res.render('layout', {
        template: 'users',
        userList,
        currentYear: `2023`,
      });
    })
    .get('/:id', (req, res) => {
      res.send(`Getting Users with Id ${req.params.id}....`);
    })
    .put('/:id', (req, res) => {
      res.send(`Update Users with Id ${req.params.id}....`);
    })
    .delete('/:id', (req, res) => {
      res.send(`Deleting Users with Id ${req.params.id}....`);
    })
    .post('/', (req, res) => {
      res.send('Hello from Post Users....');
    });

  return router;
};
