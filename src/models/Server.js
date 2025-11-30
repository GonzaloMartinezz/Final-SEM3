//Servidor
const express = require('express');

//Cors
const cors = require('cors');

const PORT = process.env.PORT || 3000;

//Base de datos
const {dbConnection} =  require('../database/config.js');
class Server {
    constructor() {
        this.app = express();

        this.port = PORT;

        //Path Jugadores
        this.jugadoresPath = '/api/jugadores';

        //Path Equipos
        this.equiposPath = '/api/equipos';

        //Conectar a base de datos
        this.dbConnect();

        //Middlewares
        this.middlewares(); 

        this.app.use(express.json());

        //Rutas de la aplicacion
        this.routes();
    }

    //Conectar a base de datos
    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        this.app.use (cors())

        // Middleware para servir archivos estáticos
        this.app.use( express.static('public') );
    }
    routes() {
        this.app.use(this.jugadoresPath, require('../routes/jugadores.js'));
        this.app.use(this.equiposPath, require('../routes/equipos.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
}
}

module.exports = Server;

