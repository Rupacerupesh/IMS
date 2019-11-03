var express = require('express');
var router = express.Router();

const batchController = require('./batch.controller');

router.get('/' , batchController.getBatches);
router.post('/', batchController.addBatch);

router.route('/:id')
    .put(batchController.updateBatch)
    .delete(batchController.removeBatch)
    .get(batchController.findById);


module.exports = router;



