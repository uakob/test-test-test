var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

// TODO
// router.get('/users', userController.index);

router.get('/users/:id', userController.read);

router.post('/users/', userController.create);

router.patch('/users/:id', userController.update);

router.delete('/users/:id/delete', userController.delete);
