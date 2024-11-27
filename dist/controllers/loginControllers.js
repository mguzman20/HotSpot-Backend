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
exports.loginPostController = void 0;
const jwt = require('jsonwebtoken');
const loginHelpers_1 = require("../helpers/loginHelpers");
const loginPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validaciones
        const loginValidation = yield (0, loginHelpers_1.validateLogin)(req);
        if (loginValidation.status != 200) {
            return res.status(loginValidation.status).json({ error: loginValidation.error });
        }
        const user = loginValidation.user;
        // Crear token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        // Enviar Response
        res.header('auth-token', token).json({
            error: null,
            data: { token }
        });
    }
    catch (error) {
        return res.status(500).json({ error: 'Error en el servidor' });
    }
});
exports.loginPostController = loginPostController;
