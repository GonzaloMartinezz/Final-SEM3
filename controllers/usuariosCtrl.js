const {response, request} = require('express');

// Controlador para manejar las rutas de usuarios
const getUsuarios = (req = request, res = response) => {
    res.json ({
        mensaje: 'Recibo el mensaje'
    });
}

module.exports = {
    getUsuarios
}