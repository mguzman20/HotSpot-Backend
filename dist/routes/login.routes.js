"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
exports.loginRoutes = (0, express_1.Router)();
const loginControllers_1 = require("../controllers/loginControllers");
exports.loginRoutes.post('/login', loginControllers_1.loginPostController);
