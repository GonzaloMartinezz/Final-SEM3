const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validarCampos.js');
const { nombreNoExiste } = require('../helpers/db_validators.js');
const router = Router();

const {JugadoresGET, JugadoresPOST , JugadoresPUT , JugadoresDELETE} = require('../controllers/jugadoresCtrl.js');


// Ejemplo de ruta GET  - obtener jugadores
router.get('/', JugadoresGET);


// Ejemplo de ruta POST -registrar jugador
router.post('/',
 [
check('firstName', 'El firstName es obligatorio').notEmpty(),
check('lastName', 'El lastName es obligatorio').notEmpty(),
check('team', 'El team es obligatorio').notEmpty(),
check('position', 'La position es obligatoria').notEmpty(),
check('number', 'El number es obligatorio').notEmpty(),
check('status', 'El status es obligatorio').notEmpty(),
check('password', 'El password debe tener al menos 6 caracteres').isLength({min:6}),
check('firstName').custom(nombreNoExiste),
validarCampos
],
JugadoresPOST
);


// Ejemplo de ruta PUT - actualizar jugador
router.put('/:id', JugadoresPUT);


// Ejemplo de ruta DELETE - eliminar jugador
router.delete('/:id', JugadoresDELETE);

module.exports = router;