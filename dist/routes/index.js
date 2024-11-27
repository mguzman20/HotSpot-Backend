"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const login_routes_1 = require("./login.routes");
const register_routes_1 = require("./register.routes");
const dashboard_routes_1 = require("./dashboard.routes");
const event_routes_1 = require("./event.routes");
const location_routes_1 = require("./location.routes");
exports.routes = express_1.default.Router();
exports.routes.use(login_routes_1.loginRoutes);
exports.routes.use(register_routes_1.registerRoutes);
exports.routes.use(dashboard_routes_1.dashboadRoutes);
exports.routes.use(event_routes_1.eventRoutes);
exports.routes.use(location_routes_1.locationRoutes);
