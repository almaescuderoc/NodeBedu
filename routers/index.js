// Router de routers, indica hacia que router debe dirigir la petición


var router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Bienvenido a Regalos Especiales")
})


router.use('/usuarios', require('./usuarios'));
router.use('/regalos', require('./regalos'));
router.use('/categorias', require('./categorias'));
router.use('/pedidos', require('./pedidos'));

module.exports = router;