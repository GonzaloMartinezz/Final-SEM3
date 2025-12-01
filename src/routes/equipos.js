const {Router} = require('express');
const {check} = require('express-validator');

const router = Router();

const {EquiposGET, EquiposPOST , EquiposPUT , EquiposDELETE} = require('../controllers/equiposCrtl.js');


router.get ('/', EquiposGET );

router.post('/',
    [
        check('name', 'El name es obligatorio').notEmpty(),
        check('city', 'La city es obligatoria').notEmpty(),
        check('conference', 'La conference es obligatoria').notEmpty(),
        check('stadium', 'El stadium es obligatorio').notEmpty(),
        check('trainer', 'El trainer es obligatorio').notEmpty(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    EquiposPOST
);


router.put ('/:id', EquiposPUT );


router.delete ('/:id', EquiposDELETE );


module.exports = router;


