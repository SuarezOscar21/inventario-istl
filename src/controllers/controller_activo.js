const express = require('express'),
    activo = require('../models/model_activo'),
    carrera = require('../models/model_carrer'),
    validar = require('../Utilities/utilities'),
    moment = require('moment')
router = express.Router();

router.post('/newActivo', (req, res) => {
    var body = req.body;
    if (validar(body.dni) === true) {
        activo.find({ codigo: body.codigo}, (err, rest) => {
            if (rest.length !== 1) {
                activo.insertMany({
                    codigo: body.codigo,
                    nombre: body.nombre,
                    dni: body.dni,
                    nombre_carrera: body.nombre_carrera,
                    nombre_producto: body.nombre_producto,
                    horas: body.horas,
                    date_inicio: body.date_inicio,
                    date_fin: body.date_fin
                }, (err, rest1) => {
                    if (err) {
                        console.error(err)
                        throw err;
                    }
                    else {
                        res.status(200).json(rest1)
                    }
                })
            }
            else {
                res.json({ mensaje: "codigo_existe" })
            }
        })
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}).get('/searchActivo', (req, res) => {
    activo.find({status: { $in: [1] } }, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else {
            res.status(200).json(rest)
        }
    })
}).post('/searchOneActivo', (req, res) => {
    activo.find({codigo:req.body.codigo,status: { $in: [1] } }, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else {
            rest.forEach(data => {
                carrera.find({ id: data.name_carrer }, (err, rest1) => {
                    rest1.forEach(data2 => {
                        if (data.name_carrer == data2.id) {
                            data.name_carrer = data2.nameCarrer;
                            res.status(200).json(rest)
                        }
                    })
                })
            })
        }
    })
}).post('/updateActivo', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
        activo.updateMany({ codigo: body.codigo }, {
            $set: {
                codigo: body.codigo,
                    nombre: body.nombre,
                    dni: body.dni,
                    nombre_carrera: body.nombre_carrera,
                    nombre_producto: body.nombre_producto,
                    horas: body.horas,
                    date_inicio: body.date_inicio,
                    date_fin: body.date_fin
            }
        }, (err, docs) => {
            if (docs.n === 0) {
                res.json({ mensaje: "codigo_noexiste" })
            }
            else {
                res.status(200).json(docs)
            }
        })
    }
    else {
        res.json({ mensaje: "codigo_incorrecta" })
    }
}).post('/deleteActivo', (req, res) => {
    activo.update({ codigo: req.body.codigo},{
        $set: { status: 0 } }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
})

module.exports = router;