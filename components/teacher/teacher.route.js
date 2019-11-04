var express = require('express');
var router = express.Router();

const teacherController = require('./teacher.controller');

router.get('/' , teacherController.getTeachers);
router.post('/', teacherController.addTeacher);

router.route('/:id')
    .put(teacherController.updateTeacher)
    .delete(teacherController.removeTeacher)
    .get(teacherController.findById);


module.exports = router;



