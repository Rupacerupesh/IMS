var express = require('express');
var router = express.Router();

const courseController = require('./course.controller');

router.get('/' , courseController.getCourses);
router.post('/', courseController.addCourse);

router.route('/:id')
    .put(courseController.updateCourse)
    .delete(courseController.removeCourse)
    .get(courseController.findById);


module.exports = router;



