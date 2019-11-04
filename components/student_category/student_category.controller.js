const StudentCategoryquery = require('./student_category.query.js');


function addStudentCategory(req,res,next){
      StudentCategoryquery.insert_studentCategory(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateStudentCategory(req,res,next){
      StudentCategoryquery.update_studentCategory(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getStudentCategory(req,res,next){
    let condition = {};
    StudentCategoryquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeStudentCategory(req,res,next){
   StudentCategoryquery.remove_studentCategory(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    StudentCategoryquery.fetch_studentCategory({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addStudentCategory,
    updateStudentCategory,
    getStudentCategory,
    removeStudentCategory,
    findById
}