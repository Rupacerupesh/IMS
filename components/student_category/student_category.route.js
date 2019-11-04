var express = require('express');
var router = express.Router();

const studentCategoryController = require('./student_category.controller');

router.get('/' , studentCategoryController.getStudentCategory);
router.post('/', studentCategoryController.addStudentCategory);

router.route('/:id')
    .put(studentCategoryController.updateStudentCategory)
    .delete(studentCategoryController.removeStudentCategory)
    .get(studentCategoryController.findById);


module.exports = router;



