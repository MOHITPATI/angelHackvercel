// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const InvestorSchema = new Schema({
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     assets: { type: String, required: true },
//     fieldOfInterest: { type: String, required: true },
//     type: { type: String, default: 'investor' },
//     profit: { type: String, required: true }
// });

// module.exports = mongoose.model('Investor', InvestorSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvestorSchema = new Schema({
    email_id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    assets: { type: String, required: true },
    field_of_interest: { type: String, required: true },
    type: { type: String, default: 'Investor' },
    profit_on_past_investments: { type: String, required: true }
});

module.exports = mongoose.model('Investor', InvestorSchema);