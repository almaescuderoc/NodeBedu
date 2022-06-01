// Conecta el CRUD que se define en Controllers con la app.js

// Este router solo puede ser para Pedidos

const router= require('express').Router();

const{
    crearPedido,
    obtenerPedidos,
    modificarPedido,
    eliminarPedido,
    obtenerPedido
} = require('../controllers/pedido');

router.get('/', obtenerPedidos);
router.get('/:id', obtenerPedido);
router.post('/', crearPedido);
router.put('/:id', modificarPedido );
router.delete('/:id', eliminarPedido);

module.exports = router;