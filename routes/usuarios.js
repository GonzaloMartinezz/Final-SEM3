const {Router} = require('express');

const router = Router();

// Ejemplo de ruta GET
router.get('/', (req, res) => {
    res.json ({
        mensaje: 'Recibo el mensaje'
    });
});

// Ejemplo de ruta POST -registrar usuario
router.post('/', (req, res) => {
     res.json ({
        mensaje: 'Envio el mensaje'
    });
});

// Ejemplo de ruta PUT - actualizar usuario
router.put('/:id', (req, res) => {
     res.json ({
        mensaje: 'Modifico el mensaje'
    });
});

// Ejemplo de ruta DELETE
router.delete('/:id', (req, res) => {
    res.json ({
        mensaje: 'Elimino el mensaje'
    });
});

module.exports = router;