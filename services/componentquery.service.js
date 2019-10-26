function insert_this_component_in_db(component_object_mapper, model, object) {
    return new Promise(function(resolve, reject) {
        let component = new model({});
        component_object_mapper(component, object);
        component.save(function(err, succ) {
            if (err) {
                reject(err);
            } else {
                resolve(succ);
            }
        });
    });
}


function fetch_one_from_component(model, condition) {
    return new Promise(function(resolve, reject) {
        model.findOne(condition)
            .exec(function(err, item) {
                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                }
            })
    });
}


function fetch_this_component_from_db(model, condition, skipValue, numberOfItemsToDisplay) {
    return new Promise(function(resolve, reject) {
        model.find(condition)
            .sort({
                _id: -1
            })
            .exec(function(err, item) {
                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                }
            });
    });
}



function update_this_component_in_db(component_object_mapper, model, id, component_to_update) {
    return new Promise(function(resolve, reject) {
        find_component_with_this_id(model, id)
            .exec(function(err, component_from_db) {
                if (err) {
                    return reject(err);
                }
                if (!component_from_db) {
                    return reject({
                        msg: 'component not found'
                    });
                }
                component_object_mapper(component_from_db, component_to_update);
                component_from_db.save(function(err, succ) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(succ);
                });
            });
    });
}

function remove_this_component_from_db(model, id) {
    return new Promise(function(resolve, reject) {
        find_component_and_remove_by_id(model, id)
            .exec(function(err, succ) {
                if (err) {
                    return reject(err);
                }
                resolve(succ);
            });
    });

}


function find_component_with_this_id(model, id) {
    return model.findById(id)
}

function find_component_and_remove_by_id(model, id) {
    return model.findByIdAndRemove(id);
}


module.exports = {
    insert_this_component_in_db,
    fetch_this_component_from_db,
    update_this_component_in_db,
    remove_this_component_from_db,
    fetch_one_from_component,
    find_component_with_this_id,
    find_component_and_remove_by_id
}