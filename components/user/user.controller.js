const Userquery = require('./user.query.js');


function addUser(req,res,next){
      Userquery.insert_user(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateUser(req,res,next){

    console.log('id' , req.params.id);
      Userquery.update_user(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getUsers(req,res,next){
    let condition = {};
    Userquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeUser(req,res,next){
   Userquery.remove_user(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    Userquery.fetch_user({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addUser,
    updateUser,
    getUsers,
    removeUser,
    findById
}