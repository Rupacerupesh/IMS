let jwt = require('jsonwebtoken')
let config = require("./../config");
const UserModel = require('./../components/user/user.model');

module.exports = function(req, res, next) {
    var token;
    if (req.headers['x-access-token']) {
        token = req.headers['x-access-token'];
    } else if (req.headers['authorization']) {
        token = req.headers['authorization'];
    } else if (req.headers['token']) {
        token = req.headers['token']
    } else if (req.query.token) {
        token = req.query.token
    }
    if (!token) {
        return next({
            msg: "token not provided"
        })
    }

    jwt.verify(token, config.jwtSecret, function(err, decoded) {
        if (err) {
            return next(err);
        }
        UserModel.findOne({ _id: decoded.id })
            .exec(function(err, user) {
                if (err) {
                    return next(err);
                }
                if (user) {
                    req.user = user;
                    return next();
                } else {
                    next({
                        msg: "user removed from system"
                    })
                }
            })

    });
}
