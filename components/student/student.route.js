var express = require('express');
var router = express.Router();

const studentController = require('./student.controller');

router.get('/' , studentController.getStudents);
router.post('/', studentController.addStudent);

router.route('/:id')
    .put(studentController.updateStudent)
    .delete(studentController.removeStudent)
    .get(studentController.findById);


module.exports = router;



