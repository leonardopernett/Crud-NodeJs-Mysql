const express = require('express');
const router  = express.Router();

const customerController = require('../controller/customerController.js')

router.get('/',             customerController.list)
router.post('/add',         customerController.save)
router.get('/delete/:id',   customerController.eliminar)
router.get('/edit/:id',     customerController.editar)
router.post('/update/:id', customerController.update);

module.exports = router;