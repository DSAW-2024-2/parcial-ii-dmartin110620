const jwt = require('jsonwebtoken');
const axios = require('axios');
const USER_CREDENTIALS = require('../model/userModel');

// Función para manejar el inicio de sesión
const login = (req, res) => {
    const { email, password } = req.body;

    if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

// Función para manejar la consulta del clima
const getWeather = async (req, res) => {
    const { latitude, longitude } = req.query;

    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
            params: {
                latitude,
                longitude,
                current_weather: true
            }
        });
        const temperature = response.data.current_weather.temperature;
        res.json({ temperature });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos del clima', error: error.message });
    }
};

module.exports = {
    login,
    getWeather
};
