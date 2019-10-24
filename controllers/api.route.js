const express = require('express');
const router = express.Router();

//Routes 
const userRoute = require('./../components/user/user.route')


//Routes
router.use('/user', userRoute);



module.exports = router;