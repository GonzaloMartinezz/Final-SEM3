const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        this.middlewares(); 
        this.app.use(express.json());
        this.routes();
    }
    middlewares() {
        // Middleware para servir archivos estáticos
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.js'));
    }

    listen(){
    this.app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    });
}
}

module.exports = Server;

