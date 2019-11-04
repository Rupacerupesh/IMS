const enquiriesquery = require('./enquiries.query');


function addEnquiries(req,res,next){
      enquiriesquery.insert_enquiries(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateEnquiries(req,res,next){
      enquiriesquery.update_enquiries(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getEnquiries(req,res,next){
    let condition = {};
    enquiriesquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeEnquiries(req,res,next){
   enquiriesquery.remove_enquiries(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    enquiriesquery.fetch_enquiries({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addEnquiries,
    updateEnquiries,
    getEnquiries,
    removeEnquiries,
    findById
}