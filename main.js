const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./route/weatherRoute');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', weatherRoutes);
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});