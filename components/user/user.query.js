const userModel = require('./user.model.js');
const userService = require('./../../services/componentquery.service');

var passwordHash = require("password-hash");


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.name)
        db_obj.name = component_obj.name;

    if (component_obj.email)
        db_obj.email = component_obj.email;

    if (component_obj.email_verified_at)
        db_obj.email_verified_at = component_obj.email_verified_at;

    if (component_obj.password)
        db_obj.password = passwordHash.generate(component_obj.password);

    if (component_obj.image)
        db_obj.image = component_obj.image;

    if (component_obj.phone)
        db_obj.phone = component_obj.phone;

    if (component_obj.address)
        db_obj.address = component_obj.address;

    if (component_obj.role_id)
        db_obj.role_id = component_obj.role_id;

}

function insert_user(new_user_data) {
    return userService.insert_this_component_in_db(component_object_mapper, userModel, new_user_data);
}

function fetch_user(condition) {
    return userService.fetch_one_from_component(userModel, condition);
}

function fetchAll(condition) {
    return userService.fetch_this_component_from_db(userModel, condition);
}


function update_user(id, new_user_data) {
    return userService.update_this_component_in_db(component_object_mapper, userModel, id, new_user_data);
}

function remove_user(id) {
    return userService.remove_this_component_from_db(userModel, id);
}


module.exports = {
    insert_user,
    fetch_user,
    update_user,
    remove_user,
    fetchAll
}