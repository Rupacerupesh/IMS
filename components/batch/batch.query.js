const batchmodel = require('./batch.model.js');
const batchService = require('./../../services/componentquery.service');


function component_object_mapper(db_obj, component_obj) {

    if (component_obj.name)
        db_obj.name = component_obj.name;

    if (component_obj.date)
        db_obj.date = component_obj.date;

    if (component_obj.month)
        db_obj.month = component_obj.month;


}


function insert_batch(new_batch_data) {
    return batchService.insert_this_component_in_db(component_object_mapper, batchmodel, new_batch_data);
}

function fetch_batch(condition) {
    return batchService.fetch_one_from_component(batchmodel, condition);
}

function fetchAll(condition) {
    return batchService.fetch_this_component_from_db(batchmodel, condition);
}


function update_batch(id, new_batch_data) {
    return batchService.update_this_component_in_db(component_object_mapper, batchmodel, id, new_batch_data);
}

function remove_batch(id) {
    return batchService.remove_this_component_from_db(batchmodel, id);
}


module.exports = {
    insert_batch,
    fetch_batch,
    update_batch,
    remove_batch,
    fetchAll
}