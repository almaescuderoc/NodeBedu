// Conecta el CRUD que se define en Controllers con la app.js

// Este router solo puede ser para Productos

const router= require('express').Router();

const{
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    obtenerUsuario,
    login
} = require('../controllers/usuario');


router.get('/', obtenerUsuarios);
router.post('/login', login);         //El orden importa
                                    //se declara como POST porque los GETs son publicos
                                    // la unica forma de garanticar
                                        //el front end no me permite enviar info por un GET, por eso se manda como un POST
                                        // el front end falla al enviar la info con GET y un POST es requerido
router.get('/:id', obtenerUsuario);

router.post('/', crearUsuario);
router.put('/:id', modificarUsuario );
router.delete('/:id', eliminarUsuario);


module.exports = router;