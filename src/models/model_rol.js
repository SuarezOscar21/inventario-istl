const mongo = require('mongoose'),
    Schemas = mongo.Schema

var rolSchema = new Schemas({
    id:{type:String,trim:true,unique:true,auto:true},
    rol:{type:String,trim:true}
})
var rol = mongo.model('roles', rolSchema);

module.exports = rol;