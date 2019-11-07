const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return  db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first();
}

function findSteps(id) {
    return db('steps as s')
    .select("s.id", "s.step_number", "s.instructions", "sc.scheme_name")
    .join("schemes as sc", "s.scheme_id", "sc.id")
    .where("s.scheme_id", "=", id)
    .orderBy("s.step_number", "asc");

}

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(id => findById(id[0]))
}

function update(obj, id){
    return db('schemes')
    .update('scheme_name', obj.scheme_name)
    .where({id})
    .then(() => findById(id))
}

function remove(id){
    return db('schemes')
    .del()
    .where({id})
    .then(() => find())
}