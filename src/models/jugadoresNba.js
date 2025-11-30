const {Schema, model} = require('mongoose');

const JugadorSchema = Schema({
    firstName: {
        type: String,
        required: [true,"Este campo es obligatorio"]
    },
    lastName: {
        type: String,
        required: [true,"Este campo es obligatorio"]  
    },
    team: {
        type: String,
        required: [true,"Este campo es obligatorio"]
    },
    position: {
        type: String,   
        required: [true,"Este campo es obligatorio"]
    },
    number: {
        type: Number,
        required: [true,"Este campo es obligatorio"]
    },
    status: {
        type: String,
        required: [true,"Este campo es obligatorio"]
    },
    password: {
        type: String,
        required: [true,"Este campo es obligatorio"],
        unique: true
    }
});

module.exports = model('Jugador', JugadorSchema , 'jugadores');   