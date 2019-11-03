var express = require('express');
var router = express.Router();

const sectionController = require('./section.controller');

router.get('/' , sectionController.getSections);
router.post('/', sectionController.addSection);

router.route('/:id')
    .put(sectionController.updateSection)
    .delete(sectionController.removeSection)
    .get(sectionController.findById);


module.exports = router;



