const studentModel = require('./student.model.js');
const studentService = require('./../../services/componentquery.service');


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

    if (component_obj.studentategory)
        db_obj.studentategory = component_obj.studentcategory;

    if (component_obj.gender)
        db_obj.gender = component_obj.gender;


}


function insert_student(new_student_data) {
    return studentService.insert_this_component_in_db(component_object_mapper, studentModel, new_student_data);
}

function fetch_student(condition) {
    return studentService.fetch_one_from_component(studentModel, condition);
}

function fetchAll(condition) {
    return studentService.fetch_this_component_from_db(studentModel, condition);
}


function update_student(id, new_student_data) {
    return studentService.update_this_component_in_db(component_object_mapper, studentModel, id, new_student_data);
}

function remove_student(id) {
    return studentService.remove_this_component_from_db(studentModel, id);
}


module.exports = {
    insert_student,
    fetch_student,
    update_student,
    remove_student,
    fetchAll
}