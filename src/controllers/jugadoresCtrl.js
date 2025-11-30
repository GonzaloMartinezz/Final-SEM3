const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const jugadoresNba = require('../models/jugadoresNba.js');

const JugadoresGET = (req = request, res = response) => {
    const {limit , key} = req.query;
    res.json ({
        mensaje: 'Recibo el mensaje',
        limit ,
        /* key , */
    });
}


const JugadoresPOST = async(req = request, res = response) => {
const datos = req.body;
const {firstName, lastName, team, position, number, status , password} = datos;

const jugador = new jugadoresNba (
    {firstName, lastName, team, position, number, status , password});

    const salt = bcryptjs.genSaltSync(10);
    //Encriptar password
    jugador.password = bcryptjs.hashSync( password , salt );

    //Guardar en la base de datos
    await jugador.save();

      res.json ({
        jugador ,
        mensaje: 'Registro de jugador exitoso',
    });
}


const JugadoresPUT = (req = request, res = response) => {
      res.json ({
        mensaje: 'Modifico el jugador'
    });
}



const JugadoresDELETE = (req = request, res = response) => {
     res.json ({
        mensaje: 'Elimino el jugador'
    });
}




module.exports = {
    JugadoresGET,
    JugadoresPOST,
    JugadoresPUT,
    JugadoresDELETE
}