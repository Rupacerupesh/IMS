const courseModel = require('./course.model.js');
const courseService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.name)
        db_obj.name = component_obj.name;

    if (component_obj.fees)
        db_obj.fees = component_obj.fees;

    if (component_obj.duration)
        db_obj.duration = component_obj.duration;


    if (component_obj.image)
        db_obj.image = component_obj.image;

    if (component_obj.description)
        db_obj.description = component_obj.description;

    if (component_obj.status)
        db_obj.status = component_obj.status;


}


function insert_course(new_course_data) {
    return courseService.insert_this_component_in_db(component_object_mapper, courseModel, new_course_data);
}

function fetch_course(condition) {
    return courseService.fetch_one_from_component(courseModel, condition);
}

function fetchAll(condition) {
    return courseService.fetch_this_component_from_db(courseModel, condition);
}


function update_course(id, new_course_data) {
    return courseService.update_this_component_in_db(component_object_mapper, courseModel, id, new_course_data);
}

function remove_course(id) {
    return courseService.remove_this_component_from_db(courseModel, id);
}


module.exports = {
    insert_course,
    fetch_course,
    update_course,
    remove_course,
    fetchAll
}