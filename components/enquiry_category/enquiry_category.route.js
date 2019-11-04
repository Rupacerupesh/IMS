var express = require('express');
var router = express.Router();

const enquiryCategoryController = require('./enquiry_category.controller');

router.get('/' , enquiryCategoryController.getEnquiryCategory);
router.post('/', enquiryCategoryController.addEnquiryCategory);

router.route('/:id')
    .put(enquiryCategoryController.updateEnquiryCategory)
    .delete(enquiryCategoryController.removeEnquiryCategory)
    .get(enquiryCategoryController.findById);


module.exports = router;



