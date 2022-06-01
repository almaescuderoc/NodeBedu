// Conecta el CRUD que se define en Controllers con la app.js

// Este router solo puede ser para Productos

const router= require('express').Router();

const{
    crearRegalo,
    obtenerRegalos,
    modificarRegalo,
    eliminarRegalo,
    obtenerRegalo
} = require('../controllers/regalo');

router.get('/', obtenerRegalos);
router.get('/:id', obtenerRegalo);
router.post('/', crearRegalo);
router.put('/:id', modificarRegalo );
router.delete('/:id', eliminarRegalo);

module.exports = router;