const express = require('express'),
      router = express.Router(),
      role = require('../controllers/controller_rol');

router.use('/datos_usuario',role)

module.exports=router;