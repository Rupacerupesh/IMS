const enquiryCategoryModel = require('./enquiry_category.model');
const enquiryCategoryService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.category_name)
        db_obj.category_name = component_obj.category_name;

    
    if (component_obj.status)
        db_obj.status = component_obj.status;


}


function insert_enquiryCategory(new_enquiryCategory_data) {
    return enquiryCategoryService.insert_this_component_in_db(component_object_mapper, enquiryCategoryModel, new_enquiryCategory_data);
}

function fetch_enquiryCategory(condition) {
    return enquiryCategoryService.fetch_one_from_component(enquiryCategoryModel, condition);
}

function fetchAll(condition) {
    return enquiryCategoryService.fetch_this_component_from_db(enquiryCategoryModel, condition);
}


function update_enquiryCategory(id, new_enquiryCategory_data) {
    return enquiryCategoryService.update_this_component_in_db(component_object_mapper, enquiryCategoryModel, id, new_enquiryCategory_data);
}

function remove_enquiryCategory(id) {
    return enquiryCategoryService.remove_this_component_from_db(enquiryCategoryModel, id);
}


module.exports = {
    insert_enquiryCategory,
    fetch_enquiryCategory,
    update_enquiryCategory,
    remove_enquiryCategory,
    fetchAll
}