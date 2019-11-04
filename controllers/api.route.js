const express = require('express');
const router = express.Router();

//middlewares
const authenticate = require('./../middlewares/authenticate');

//Routes 
const userRoute = require('./../components/user/user.route')
const sectionRoute = require('./../components/section/section.route')
const courseRoute = require('./../components/course/course.route')
const batchRoute = require('./../components/batch/batch.route')
const enquiriesRoute = require('./../components/enquiries/enquiries.route')
const enquirycatoegoryRoute = require('./../components/enquiry_category/enquiry_category.route')
const studentcatoegoryRoute = require('./../components/student_category/student_category.route')
const teacherRoute = require('./../components/teacher/teacher.route')
const studentRoute = require('./../components/student/student.route')

//Routes
router.use('/user', userRoute);
router.use('/course', authenticate, courseRoute);
router.use('/batch', authenticate, batchRoute);
router.use('/section', authenticate, sectionRoute);
router.use('/enquiries', authenticate, enquiriesRoute);
router.use('/enquiry_category', authenticate, enquirycatoegoryRoute);
router.use('/teacher', authenticate, teacherRoute);
router.use('/student', authenticate, studentRoute);
router.use('/student_category', authenticate, studentcatoegoryRoute);



module.exports = router;