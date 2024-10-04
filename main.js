const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./route/weatherRoute');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/', weatherRoutes);

// Manejar rutas no definidas
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});