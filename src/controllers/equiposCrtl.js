const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Equipo = require('../models/equiposNba.js');

const EquiposGET = async (req = request, res = response) => {
   try {
        // Buscamos todos los equipos
        const equipos = await Equipo.find();

        
        res.json({
            ok: true,
            total: equipos.length,
            equipos
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los equipos. Revisa la consola de VSCode para más detalles.'
        });
    }
}   



const EquiposPOST = async (req = request, res = response) => {
    try {
        const datos = req.body;
        let { name, city, conference, stadium, trainer, password } = datos;

        if (!name) {
            return res.status(400).json({ ok: false, msg: 'El campo name es obligatorio' });
        }

        // Normalizar nombre para que coincida con el índice lowercase/trim del esquema
        const nameNormalized = name.toString().trim().toLowerCase();

        // Comprobar existencia previa para evitar lanzar error 11000
        const existe = await equiposNba.findOne({ name: nameNormalized });
        if (existe) {
            return res.status(409).json({ ok: false, msg: `Ya existe un equipo con el nombre "${nameNormalized}"` });
        }

        const equipo = new equiposNba({ name: nameNormalized, city, conference, stadium, trainer, password });

        const salt = bcryptjs.genSaltSync(10);
        // Encriptar password
        equipo.password = bcryptjs.hashSync(password, salt);

        // Guardar en la base de datos
        const saved = await equipo.save();

        return res.status(201).json({ ok: true, equipo: saved, mensaje: 'Registro de equipo exitoso' });
    } catch (error) {
        console.error('Error creando equipo:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ ok: false, msg: 'Error de validación', errors: error.errors });
        }
        if (error.code && error.code === 11000) {
            return res.status(409).json({ ok: false, msg: 'Ya existe un equipo con ese nombre', keyValue: error.keyValue });
        }
        return res.status(500).json({ ok: false, msg: 'Error interno', error: error.message });
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