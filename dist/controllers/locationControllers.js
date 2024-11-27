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
exports.locationPutController = exports.locationDeleteController = exports.locationPostController = exports.locationGetController = exports.locationsGetController = void 0;
const { Location } = require("../models/locations");
const locationsGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield Location.find();
        res.json(locations);
    }
    catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
});
exports.locationsGetController = locationsGetController;
const locationGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ error: "Ubicación no encontrada" });
        }
        res.json(location);
    }
    catch (error) {
        res.status(400).json({ error: "Error al obtener ubicación" });
    }
});
exports.locationGetController = locationGetController;
const locationPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = new Location({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            coordinates: req.body.coordinates
        });
        const savedLocation = yield location.save();
        res.json(savedLocation);
    }
    catch (error) {
        res.status(400).json({ error: "Error al crear ubicación" });
    }
});
exports.locationPostController = locationPostController;
const locationDeleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield Location.findByIdAndDelete(req.params.id);
        res.json(location);
    }
    catch (error) {
        res.status(400).json({ error: "Error al eliminar ubicación" });
    }
});
exports.locationDeleteController = locationDeleteController;
const locationPutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!location) {
            return res.status(404).json({ error: "Ubicación no encontrada" });
        }
        yield location.save();
        res.json(location);
    }
    catch (error) {
        res.status(400).json({ error: "Error al actualizar ubicación" });
    }
});
exports.locationPutController = locationPutController;
