const enquiriesmodel = require('./enquiries.model.js');
const enquiriesService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.name)
        db_obj.name = component_obj.name;

    if (component_obj.email)
        db_obj.email = component_obj.email;

    if (component_obj.phone)
        db_obj.phone = component_obj.phone;

    if (component_obj.enquiryCategory)
        db_obj.enquiryCategory = component_obj.enquiryCategory;

    if (component_obj.source)
        db_obj.source = component_obj.source;

    if (component_obj.respondedThrough)
        db_obj.respondedThrough = component_obj.respondedThrough;

    if (component_obj.date)
        db_obj.date = component_obj.date;

    if (component_obj.remarks)
        db_obj.remarks = component_obj.remarks;


}


function insert_enquiries(new_enquiries_data) {
    return enquiriesService.insert_this_component_in_db(component_object_mapper, enquiriesmodel, new_enquiries_data);
}

function fetch_enquiries(condition) {
    return enquiriesService.fetch_one_from_component(enquiriesmodel, condition);
}

function fetchAll(condition) {
    return enquiriesService.fetch_this_component_from_db(enquiriesmodel, condition);
}


function update_enquiries(id, new_enquiries_data) {
    return enquiriesService.update_this_component_in_db(component_object_mapper, enquiriesmodel, id, new_enquiries_data);
}

function remove_enquiries(id) {
    return enquiriesService.remove_this_component_from_db(enquiriesmodel, id);
}


module.exports = {
    insert_enquiries,
    fetch_enquiries,
    update_enquiries,
    remove_enquiries,
    fetchAll
}