const Studentquery = require('./student.query.js');


function addStudent(req,res,next){
      Studentquery.insert_student(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateStudent(req,res,next){
      Studentquery.update_student(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getStudents(req,res,next){
    let condition = {};
    Studentquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeStudent(req,res,next){
   Studentquery.remove_student(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Studentquery.fetch_student({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addStudent,
    updateStudent,
    getStudents,
    removeStudent,
    findById
}