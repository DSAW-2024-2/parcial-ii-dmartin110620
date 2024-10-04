const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(403).json({ message: 'Token no dado' });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403).json({ message: 'Token inválido' });
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };