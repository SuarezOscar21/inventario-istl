const express = require('express'),
    rol = require('../models/model_rol'),
    router = express.Router();

router.post('/newRole',(req,res)=>{
    rol.insertMany({
        id:req.body.id,
        rol:req.body.rol
    },(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        else{
            res.status(200).json(rest)
        }
    })
}).get('/searchRole',(req,res)=>{
    rol.find({},(err,rest)=>{
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

