const express = require('express');
const router = express.Router();
const routeValidation = require('../validations/routeValidation')
const userCtrl = require('../controllers/user');
const userValidation = require('../validations/userValidation')

// Returns all users not deleted
router.get('/', userCtrl.getList);

// Returns a user by id
router.get('/:id', userValidation.getById, routeValidation.checkErrors, userCtrl.getById);

// Creates a new user
router.post('/', userValidation.addUser, routeValidation.checkErrors, userCtrl.add);

// Updates a user
router.put('/', userValidation.updateOrDeleteUser, routeValidation.checkErrors, userCtrl.update);

// Sets a user as deleted
router.delete('/', userValidation.updateOrDeleteUser, routeValidation.checkErrors, userCtrl.delete);

module.exports = function (app) {
    app.use('/users', router);
  }