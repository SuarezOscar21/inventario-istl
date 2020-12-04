const express = require('express'),
      router = express.Router(),
      activo = require('../controllers/controller_activo');

router.use('/datos_activo',activo)

module.exports=router;