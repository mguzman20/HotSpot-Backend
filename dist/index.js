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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes_1 = require("./routes");
const verifyToken = require('./helpers/validate-token');
const app = (0, express_1.default)();
mongoose.set('strictQuery', false);
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const PORT = process.env.PORT || 3000;
// Usar las rutas
app.use(express_1.default.json());
app.use('/', routes_1.routes);
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!!!');
});
// Server setup
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(process.env.CONNECTION_MONGO);
        app.listen(PORT, () => {
            console.log('The application is listening '
                + 'on port http://localhost:' + PORT);
        });
    }
    catch (error) {
        console.log('Error:', error);
    }
});
start();
