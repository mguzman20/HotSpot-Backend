"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboadRoutes = void 0;
const express_1 = require("express");
exports.dashboadRoutes = (0, express_1.Router)();
const dashboardControllers_1 = require("../controllers/dashboardControllers");
const validate_token_1 = require("../helpers/validate-token");
exports.dashboadRoutes.get('/dashboard', validate_token_1.verifyToken, dashboardControllers_1.dashboardGetController);
