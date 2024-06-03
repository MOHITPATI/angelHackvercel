const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email_id: { type: String, required: true, unique: true },
    type: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);