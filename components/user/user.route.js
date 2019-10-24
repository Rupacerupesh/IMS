var express = require('express');
var router = express.Router();

const userController = require('./user.controller');

router.get('/' ,userController.getUsers);
router.post('/',userController.addUser);

router.route('/:id')
    .put(userController.updateUser)
    .delete(userController.removeUser)
    .get(userController.findById);


module.exports = router;
