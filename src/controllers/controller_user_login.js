const express = require('express'),
    login = require('../models/model_user_login'),
    validar = require('../Utilities/utilities'),
    role = require('../models/model_rol'),
    router = express.Router();

router.post('/newPersona', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
        login.find({ dni: body.dni }, (err, rest1) => {
            if (rest1.length !== 1) {
                console.log("hola")
                login.insertMany({
                    nombre: body.nombre,
                    dni: body.dni,
                    genero: body.genero,
                    telefono: body.telefono,
                    correo: body.correo,
                    rol: body.rol,
                    direccion: body.direccion,
                    password: body.password
                }, (err, rest) => {
                    if (err) {
                        console.log(err)
                        throw err;
                    }
                   else{
                    res.status(200).json(rest)
                   }
                })
            } else {
                res.json({ mensaje: "cedula_existe" })
            }
        })
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}).get('/searchPerson', (req, res) => {
    login.find({}, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else{
            res.status(200).json(rest)
        }
    })
}).post('/getLogin', (req, res) => {
    login.find({ dni: req.body.dni, password: req.body.password }, { dni: 1, role: 1 }, (err, rest) => {
        if (rest.length === 1) {
            res.status(200).json(rest)
        } else {
            res.json({mensaje:"incorrect"});
        }
        if (err) {
            console.log(err)
            throw err;
        }
    })
}).post('/updatePerson', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
        /*login.find({ dni: body.dni }, (err, rest1) => {
            if (rest1 !== 1) {*/
                login.updateMany({ dni: body.dni }, {
                    $set: {
                        dni:body.dni,
                        nombre: body.nombre,
                        genero: body.genero,
                        telefono: body.telefono,
                        correo: body.correo,
                        rol: body.rol,
                        direccion: body.direccion,
                        password: body.password
                    }
                }, (err, docs) => {
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    else{
                        res.status(200).json(docs)
                    }
                })
            /*}
            else {
                res.json({ mensaje: "cedula_existe" })
            }

        })*/
    }
    else {
        res.json({ mensaje: "cedula_incorrecta" })
    }

}).post('/deletePerson',(req,res)=>{
    login.remove({dni:req.body.dni},(err,rest)=>{
        if(rest.deletedCount !==1){
            res.json({mensaje:"no encontrado"})
        }else{
            res.status(200).json(rest)
        }
        
    })
})

module.exports = router;