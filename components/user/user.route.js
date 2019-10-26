var express = require('express');
var router = express.Router();


const authenticate = require('./../../middlewares/authenticate');


const userController = require('./user.controller');

router.get('/' , authenticate, userController.getUsers);
router.post('/', authenticate, userController.addUser);

router.post('/login',userController.login);

router.route('/:id')
    .put(authenticate, userController.updateUser)
    .delete(authenticate, userController.removeUser)
    .get(authenticate, userController.findById);	


module.exports = router;
