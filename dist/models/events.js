"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    coordinates: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Event', eventSchema);