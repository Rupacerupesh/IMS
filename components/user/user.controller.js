const Userquery = require('./user.query.js');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const config = require('./../../config');


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


function login(req,res,next){
    Userquery.fetch_user({ username: req.body.username })
        .then(function(user){
            var isMatched = passwordHash.verify(req.body.password, user.password);
            if (isMatched) {
                var token = jwt.sign({ id: user._id, name: user.name, role: user.role_id }, config.jwtSecret);
                res.json({
                    user,
                    token
                });
            } else {
                next({
                    msg: 'invalid credentials'
                })
            }

        })
        .catch(function(error){
            next({
                msg: "invalid credentials"
            })
        })

}


module.exports = {
    addUser,
    updateUser,
    getUsers,
    removeUser,
    findById,
    login
}