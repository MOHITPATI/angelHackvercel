// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const MentorSchema = new Schema({
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     assets: { type: String, required: true },
//     fieldOfInterest: { type: String, required: true },
//     type: { type: String, default: 'mentor' },
//     rating: { type: Number, default: 5 }
// });

// module.exports = mongoose.model('Mentor', MentorSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
    email_id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    assets: { type: String, required: true },
    field_of_interest: { type: String, required: true },
    type: { type: String, default: 'Mentor' },
    rating: { type: Number, default: 5 },
    // ... other fields ...
    ratings: {
        type: [Number],
        default: [],
    },
    averageRating: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Mentor', MentorSchema);