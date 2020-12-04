const express = require('express'),
      router = express.Router(),
      carrera = require('../controllers/controller_carrer');

router.use('/datos_activo',carrera)

module.exports=router;