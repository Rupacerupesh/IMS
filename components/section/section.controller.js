const Sectionquery = require('./section.query.js');


function addSection(req,res,next){
      Sectionquery.insert_section(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateSection(req,res,next){
      Sectionquery.update_section(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getSections(req,res,next){
    let condition = {};
    Sectionquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeSection(req,res,next){
   Sectionquery.remove_section(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Sectionquery.fetch_section({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addSection,
    updateSection,
    getSections,
    removeSection,
    findById
}