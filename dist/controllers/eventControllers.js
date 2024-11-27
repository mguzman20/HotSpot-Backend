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
exports.eventPutController = exports.eventDeleteController = exports.eventPostController = exports.eventGetController = exports.eventsGetController = void 0;
const Event = require('../models/events');
const eventsGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield Event.find();
        res.json(events);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno' });
    }
});
exports.eventsGetController = eventsGetController;
const eventGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event.findById(parseInt(req.params.id));
        if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json(event);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al obtener evento' });
    }
});
exports.eventGetController = eventGetController;
const eventPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = new Event({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            coordinates: req.body.coordinates
        });
        const savedEvent = yield event.save();
        res.json(savedEvent);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear evento' });
    }
});
exports.eventPostController = eventPostController;
const eventDeleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event.findByIdAndDelete(req.params.id);
        res.json(event);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar evento' });
    }
});
exports.eventDeleteController = eventDeleteController;
const eventPutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        yield event.save();
        res.json(event);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al actualizar evento' });
    }
});
exports.eventPutController = eventPutController;
