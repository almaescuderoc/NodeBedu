// Conecta el CRUD que se define en Controllers con la app.js

// Este router solo puede ser para Categorias

const router= require('express').Router();

const{
    crearCategoria,
    obtenerCategorias,
    modificarCategoria,
    eliminarCategoria,
    obtenerCategoria
} = require('../controllers/categoria');

router.get('/', obtenerCategorias);
router.get('/:id', obtenerCategoria);
router.post('/', crearCategoria);
router.put('/:id', modificarCategoria );
router.delete('/:id', eliminarCategoria);

module.exports = router;