const EnquiryCategoryquery = require('./enquiry_category.query.js');


function addEnquiryCategory(req,res,next){
      EnquiryCategoryquery.insert_enquiryCategory(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function updateEnquiryCategory(req,res,next){
      EnquiryCategoryquery.update_enquiryCategory(req.params.id, req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function getEnquiryCategory(req,res,next){
    let condition = {};
    EnquiryCategoryquery.fetchAll(condition)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function removeEnquiryCategory(req,res,next){
   EnquiryCategoryquery.remove_enquiryCategory(req.params.id)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            next(err);
        })

}

function findById(req,res,next){
    EnquiryCategoryquery.fetch_enquiryCategory({ _id: req.params.id })
        .then(function(data) {
            res.json(data[0]);
        })
        .catch(function(err) {
            next(err);
        })

}


module.exports = {
    addEnquiryCategory,
    updateEnquiryCategory,
    getEnquiryCategory,
    removeEnquiryCategory,
    findById
}