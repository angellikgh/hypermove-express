/**
 * @file users.js
 * @summary Defines user schema
 * */

const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    wallet: {
        type: String,
        required: true,
        unique: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

module.exports = {
    Scores: mongoose.model("Scores", scoreSchema)
};
 