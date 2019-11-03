const express = require('express');
const router = express.Router();

//middlewares
const authenticate = require('./../middlewares/authenticate');

//Routes 
const userRoute = require('./../components/user/user.route')
const courseRoute = require('./../components/course/course.route')
const batchRoute = require('./../components/batch/batch.route')


//Routes
router.use('/user', userRoute);
router.use('/course', authenticate, courseRoute);
router.use('/batch', authenticate, batchRoute);



module.exports = router;