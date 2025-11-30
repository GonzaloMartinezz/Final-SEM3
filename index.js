const express = require('express');
const app = express();

const PORT = 3000;

// Middleware para parsear JSON en el body
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/get', (req, res) => {
    res.status(200).send('Hello, Final SEM 3!');
});

// Ruta POST corregida: '/:id' y callback correctamente definido
app.post('/get/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body || {};

    // Construir la respuesta y enviar UNA sola vez
    const response = { id, logo };
    res.status(200).json(response);
});

