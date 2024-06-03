// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const EntrepreneurSchema = new Schema({
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     assets: { type: String, required: true },
//     fieldOfInterest: { type: String, required: true },
//     type: { type: String, default: 'entrepreneur' }
// });

// module.exports = mongoose.model('Entrepreneur', EntrepreneurSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    email_id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    assets: { type: String, required: true },
    field_of_interest: { type: String, required: true },
    type: { type: String, default: 'Entrepreneur' }
});

module.exports = mongoose.model('Entrepreneur', EntrepreneurSchema);