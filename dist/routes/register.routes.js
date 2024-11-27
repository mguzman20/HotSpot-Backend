"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
exports.registerRoutes = (0, express_1.Router)();
const registerControllers_1 = require("../controllers/registerControllers");
exports.registerRoutes.post('/register', registerControllers_1.registerPostController);
