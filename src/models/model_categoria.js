const mongo = require('mongoose'),
    Schemas = mongo.Schema

var categotiaSchema = new Schemas({
    codigo:{type:String,trim:true},
    nombre:{type:String,trim:true},
    tipo:{type:String,trim:true},
    descripcion:{type:String,trim:true},
    ubicacion:{type:String,trim:true},
    status:{type:Number,default:1}
})
var categoria = mongo.model('categoria', categoriaSchema);

module.exports = categoria;