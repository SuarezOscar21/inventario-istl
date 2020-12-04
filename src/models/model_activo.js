const mongo = require('mongoose'),
    Schemas = mongo.Schema

var activoSchema = new Schemas({
    codigo:{type:String,trim:true},
    nombre:{type:String,trim:true},
    dni:{type:String,trim:true},
    nombre_carrera:{type:String,trim:true},
    nombre_producto:{type:String,trim:true},
    horas:{type:Number,trim:true},
    date_inicio:{type:Date,trim:true},
    date_fin:{type:Date,trim:true},
    status:{type:Number,default:1}
})
var activo = mongo.model('datos_activo', activoSchema);

module.exports = activo;