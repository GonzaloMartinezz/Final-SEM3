const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Jugador = require('../models/jugadoresNba.js');

const JugadoresGET = async(req = request, res = response) => {
    const { limit = 5, desde = 0 } = req.query;

    try {
       
        const [ total, jugadores ] = await Promise.all([
            Jugador.countDocuments(),
            Jugador.find()
                .skip( Number(desde) )
                .limit( Number(limit) )
        ]);

        res.json({
            ok: true,
            total,
            count: jugadores.length,
            jugadores
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los jugadores. Revisa la consola.'
        });
    }
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