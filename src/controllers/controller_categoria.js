const express = require('express'),
    categoria = require('../models/model_categoria'),

    router = express.Router();

router.post('/newCategoria', (req, res) => {
    var body = req.body
    if (validar(body.codigo) === true) {
        cod.find({ codigo: body.codigo }, (err, rest1) => {
            if (rest1.length !== 1) {
                console.log("hola")
                cod.insertMany({
                    codigo: body.codigo,
                    nombre: body.nombre,
                    tipo: body.tipo,
                    descripcion: body.descripcion,
                    ubicacion: body.ubicacion,
                    status: body.status

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
                res.json({ mensaje: "codigo_existe" })
            }
        })
    } else {
        res.json({ mensaje: "codigo_incorrecta" })
    }
}).get('/searchCategoria', (req, res) => {
    cod.find({}, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else{
            res.status(200).json(rest)
        }
    })
}).post('/getCategoria', (req, res) => {
    cod.find({ codigo: req.body.codigo}, { codigo: 1 }, (err, rest) => {
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
}).post('/updateCategoria', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
        

                cod.updateMany({ codigo: body.codigo}, {
                    $set: {
                        codigo: body.codigo,
                        nombre: body.nombre,
                        tipo: body.tipo,
                        descripcion: body.descripcion,
                        ubicacion: body.ubicacion,
                        status: body.status
    
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
           
    }
    else {
        res.json({ mensaje: "codigo_incorrecta" })
    }

}).post('/deleteCategoria',(req,res)=>{
    login.remove({codigo:req.body.codigo},(err,rest)=>{
        if(rest.deletedCount !==1){
            res.json({mensaje:"no encontrado"})
        }else{
            res.status(200).json(rest)
        }
        
    })
})

module.exports = router;