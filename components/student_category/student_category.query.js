const studentCategoryModel = require('./student_category.model');
const studentCategoryService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.category_name)
        db_obj.category_name = component_obj.category_name;


    if (component_obj.status)
        db_obj.status = component_obj.status;

}


function insert_studentCategory(new_studentCategory_data) {
    return studentCategoryService.insert_this_component_in_db(component_object_mapper, studentCategoryModel, new_studentCategory_data);
}

function fetch_studentCategory(condition) {
    return studentCategoryService.fetch_one_from_component(studentCategoryModel, condition);
}

function fetchAll(condition) {
    return studentCategoryService.fetch_this_component_from_db(studentCategoryModel, condition);
}


function update_studentCategory(id, new_studentCategory_data) {
    return studentCategoryService.update_this_component_in_db(component_object_mapper, studentCategoryModel, id, new_studentCategory_data);
}

function remove_studentCategory(id) {
    return studentCategoryService.remove_this_component_from_db(studentCategoryModel, id);
}


module.exports = {
    insert_studentCategory,
    fetch_studentCategory,
    update_studentCategory,
    remove_studentCategory,
    fetchAll
}