const { Router } = require('express');
const routes = Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const dashBoardController = require('../controllers/dashBoardController');


routes.post('/users', userController.store);
routes.get('/users', userController.index);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.destroy);
routes.post('/auth', authController.store);
routes.use(dashBoardController);

module.exports = routes;