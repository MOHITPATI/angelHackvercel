// models/FieldOfInterest.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldOfInterestSchema = new Schema({
    value: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('FieldOfInterest', FieldOfInterestSchema);