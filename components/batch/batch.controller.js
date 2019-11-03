const Batchquery = require('./batch.query.js');


function addBatch(req,res,next){
      Batchquery.insert_batch(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateBatch(req,res,next){
      Batchquery.update_batch(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getBatches(req,res,next){
    let condition = {};
    Batchquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeBatch(req,res,next){
   Batchquery.remove_batch(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Batchquery.fetch_batch({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addBatch,
    updateBatch,
    getBatches,
    removeBatch,
    findById
}