const Teacherquery = require('./teacher.query.js');


function addTeacher(req,res,next){
      Teacherquery.insert_teacher(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateTeacher(req,res,next){
      Teacherquery.update_teacher(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getTeachers(req,res,next){
    let condition = {};
    Teacherquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeTeacher(req,res,next){
   Teacherquery.remove_teacher(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Teacherquery.fetch_teacher({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addTeacher,
    updateTeacher,
    getTeachers,
    removeTeacher,
    findById
}