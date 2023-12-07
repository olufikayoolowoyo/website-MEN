const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { userService } = params;

  router
    .get('/', async (req, res) => {
      // If the session doesnt exist , create it
      //   if (!req.session.visitCount) {
      //     req.session.visitCount = 0;
      //   }
      //   req.session.visitCount += 1;
      //   console.log(`Current Visit => ${req.session.visitCount}`);

      const userData = await userService.getList();
      res.json(userData);
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
