const mongo = require('mongoose'),
    Schemas = mongo.Schema

var userSchema = new Schemas({
    nombre:{type:String,trim:true},
    dni:{type:String,trim:true,unique:true},
    genero:{type:String,trim:true},
    telefono:{type:String,trim:true},
    correo:{type:String,trim:true},
    rol:{type:String,trim:true},
    direccion:{type:String,trim:true},
    password:{type:String,trim:true}
})
var user = mongo.model('personas', userSchema);

module.exports = user;