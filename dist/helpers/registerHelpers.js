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
exports.saveUser = exports.hashPassword = exports.validateRegister = exports.registerRoutes = void 0;
const express_1 = require("express");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
exports.registerRoutes = (0, express_1.Router)();
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});
const validateRegister = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = schemaRegister.validate(req.body);
        if (error)
            return { status: 400, error: error.details[0].message };
        const emailExists = yield User.findOne({ email: req.body.email });
        if (emailExists)
            return { status: 400, error: 'Email ya registrado' };
    }
    catch (error) {
        throw new Error('Error validating user');
    }
});
exports.validateRegister = validateRegister;
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt.genSalt(10);
        return yield bcrypt.hash(password, salt);
    }
    catch (error) {
        throw new Error('Error hashing password');
    }
});
exports.hashPassword = hashPassword;
const saveUser = (req, res, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = yield user.save();
        res.json({
            error: null,
            data: savedUser
        });
    }
    catch (error) {
        throw new Error('Error saving user');
    }
});
exports.saveUser = saveUser;
