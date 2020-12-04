const express = require('express'),
    carrera = require('../models/model_carrer'),
    router = express.Router();

router.post('/newCarrer',(req,res)=>{
    var body=req.body;
    carrera.insertMany({
        id:body.id,
        nombreCarrera:body.nombreCarrera
    },(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        else{
            res.status(200).json(rest)
        }
    })
}).get('/searchCarrer',(req,res)=>{
    carrera.find({},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        else{
            res.status(200).json(rest)
        }
    })
})

module.exports=router;