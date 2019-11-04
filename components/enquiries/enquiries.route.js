var express = require('express');
var router = express.Router();

const enquiriesController = require('./enquiries.controller');

router.get('/' , enquiriesController.getEnquiries);
router.post('/', enquiriesController.addEnquiries);

router.route('/:id')
    .put(enquiriesController.updateEnquiries)
    .delete(enquiriesController.removeEnquiries)
    .get(enquiriesController.findById);


module.exports = router;



