const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/saludo', (req, res) => {
    res.json({ 
        mensaje: '¡Servidor Node.js con Express funcionando correctamente en VS Code!' 
    });
});

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
});