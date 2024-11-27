"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.loginRoutes = void 0;
const express_1 = require("express");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
exports.loginRoutes = (0, express_1.Router)();
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});
const validateLogin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = schemaLogin.validate(req.body);
        if (error)
            return { status: 400, error: error.details[0].message };
        const user = yield User.findOne({ email: req.body.email });
        if (!user)
            return { status: 400, error: 'Usuario no encontrado' };
        const validPassword = yield bcrypt.compare(req.body.password, user.password);
        if (!validPassword)
            return { status: 400, error: 'Contraseña no válida' };
        return { status: 200, user };
    }
    catch (error) {
        throw new Error('Error validating user');
    }
});
exports.validateLogin = validateLogin;
