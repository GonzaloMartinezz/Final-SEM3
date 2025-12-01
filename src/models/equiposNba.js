const {Schema, model} = require('mongoose');

const EquiposSchema = Schema({   
    name: {
        type: String,
        required: [true, 'El nombre del equipo es obligatorio'],
       
    },
    city: {   
        type: String,
        required: [true, 'La ciudad del equipo es obligatoria']
    },
    conference: {
        type: String,
        required: [true, 'La conferencia del equipo es obligatoria']
    },
    stadium: {
        type: String,
        required: [true, 'El estadio del equipo es obligatorio']
    },
    trainer: {
        type: String,
        required: [true, 'El entrenador del equipo es obligatorio']
    },    
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    }
});

module.exports = model('Equipo', EquiposSchema , 'equiposNBA');