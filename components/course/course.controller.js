const Coursequery = require('./course.query.js');


function addCourse(req,res,next){
      Coursequery.insert_course(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateCourse(req,res,next){
      Coursequery.update_course(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getCourses(req,res,next){
    let condition = {};
    Coursequery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeCourse(req,res,next){
   Coursequery.remove_course(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Coursequery.fetch_course({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addCourse,
    updateCourse,
    getCourses,
    removeCourse,
    findById
}