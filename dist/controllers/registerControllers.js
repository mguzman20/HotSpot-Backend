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
exports.registerPostController = void 0;
const registerHelpers_1 = require("../helpers/registerHelpers");
const registerPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validate user
        const registerValidation = yield (0, registerHelpers_1.validateRegister)(req);
        if (registerValidation)
            return res.status(registerValidation.status).json({ error: registerValidation.error });
        // hash contraseña
        const hashedPassword = yield (0, registerHelpers_1.hashPassword)(req.body.password);
        yield (0, registerHelpers_1.saveUser)(req, res, hashedPassword);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.registerPostController = registerPostController;
