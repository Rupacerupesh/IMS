const sectionmodel = require('./section.model.js');
const sectionService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.section_name)
        db_obj.section_name = component_obj.section_name;



}


function insert_section(new_section_data) {
    return sectionService.insert_this_component_in_db(component_object_mapper, sectionmodel, new_section_data);
}

function fetch_section(condition) {
    return sectionService.fetch_one_from_component(sectionmodel, condition);
}

function fetchAll(condition) {
    return sectionService.fetch_this_component_from_db(sectionmodel, condition);
}


function update_section(id, new_section_data) {
    return sectionService.update_this_component_in_db(component_object_mapper, sectionmodel, id, new_section_data);
}

function remove_section(id) {
    return sectionService.remove_this_component_from_db(sectionmodel, id);
}


module.exports = {
    insert_section,
    fetch_section,
    update_section,
    remove_section,
    fetchAll
}