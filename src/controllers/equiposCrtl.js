const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const equiposNba = require('../models/equiposNba.js');

const EquiposGET = (req = request, res = response) => {
    const {limit , key} = req.query;
    res.json ({
        mensaje: 'Recibo el mensaje',
        limit 
       /*  key ,  */
    });
}

const EquiposPOST = async (req = request, res = response) => {
    try {
        const datos = req.body;
        const { name, city, conference, stadium, trainer, password } = datos;

        const equipo = new equiposNba({ name, city, conference, stadium, trainer, password });

        const salt = bcryptjs.genSaltSync(10);
        // Encriptar password
        equipo.password = bcryptjs.hashSync(password, salt);

        // Guardar en la base de datos
        await equipo.save();

        res.json({
            equipo: saved,
            mensaje: 'Registro de equipo exitoso',
        });
    } catch (error) {
        console.log(error);
    }
} 

const EquiposPUT = (req = request, res = response) => {
    res.json ({
        mensaje: 'Modifico el equipo'
    });
}
const EquiposDELETE = (req = request, res = response) => {
    res.json ({
        mensaje: 'Elimino el equipo'
    });
}

module.exports = {
    EquiposGET,
    EquiposPOST,
    EquiposPUT,
    EquiposDELETE
}