"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).json({ error: 'Acceso denegado' });
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.User = verified;
        next(); // continuamos
    }
    catch (error) {
        res.status(400).json({ error: 'token no es válido' });
    }
};
exports.verifyToken = verifyToken;
