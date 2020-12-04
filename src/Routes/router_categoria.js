const categoria = require('../models/model_categoria');

const express = require('express'),
      router = express.Router(),
      categori = require('../controllers/controller_categoria');

router.use('/datos_categoria',categoria)

module.exports=router;