const Jugador = require('../models/jugadoresNba.js');

const nombreNoExiste = async (nombre = '') => {
    const existe = await Jugador.findOne({ firstName: nombre });
    if (existe) {
        throw new Error(`El jugador con nombre "${nombre}" ya existe en la base de datos`);
    }
    return true;
};

module.exports = {
    nombreNoExiste,
};