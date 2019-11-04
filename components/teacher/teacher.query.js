const teacherModel = require('./teacher.model.js');
const teacherService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.name)
        db_obj.name = component_obj.name;

    if (component_obj.email)
        db_obj.email = component_obj.email;


    if (component_obj.email_verified_at)
        db_obj.email_verified_at = component_obj.email_verified_at;

    if (component_obj.password)
        db_obj.password = component_obj.password;

    if (component_obj.image)
        db_obj.image = component_obj.image;

    if (component_obj.phone)
        db_obj.phone = component_obj.phone;

    if (component_obj.address)
        db_obj.address = component_obj.address;

    if (component_obj.category)
        db_obj.category = component_obj.category;

    if (component_obj.timing)
        db_obj.timing = component_obj.timing;


}


function insert_teacher(new_teacher_data) {
    return teacherService.insert_this_component_in_db(component_object_mapper, teacherModel, new_teacher_data);
}

function fetch_teacher(condition) {
    return teacherService.fetch_one_from_component(teacherModel, condition);
}

function fetchAll(condition) {
    return teacherService.fetch_this_component_from_db(teacherModel, condition);
}


function update_teacher(id, new_teacher_data) {
    return teacherService.update_this_component_in_db(component_object_mapper, teacherModel, id, new_teacher_data);
}

function remove_teacher(id) {
    return teacherService.remove_this_component_from_db(teacherModel, id);
}


module.exports = {
    insert_teacher,
    fetch_teacher,
    update_teacher,
    remove_teacher,
    fetchAll
}