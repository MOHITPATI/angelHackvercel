// const express = require('express');
// const router = express.Router();

// const Entrepreneur = require('../models/Entrepreneur');
// const Mentor = require('../models/Mentor');
// const Investor = require('../models/Investor');

// router.post('/', (req, res) => {
//     const { name, phone, address, assets, fieldOfInterest, typeOfUser, rating, profit } = req.body;

//     if (typeOfUser === 'entrepreneur') {
//         const newEntrepreneur = new Entrepreneur({ name, phone, address, assets, fieldOfInterest });
//         newEntrepreneur.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else if (typeOfUser === 'mentor') {
//         const newMentor = new Mentor({ name, phone, address, assets, fieldOfInterest, rating });
//         newMentor.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else if (typeOfUser === 'investor') {
//         const newInvestor = new Investor({ name, phone, address, assets, fieldOfInterest, profit });
//         newInvestor.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else {
//         res.status(400).json('Error: Invalid user type');
//     }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Entrepreneur = require('../models/Entrepreneur');
// const Mentor = require('../models/Mentor');
// const Investor = require('../models/Investor');
// const User = require('../models/User');

// router.post('/register', async(req, res) => {
//     const { email, name, phone, address, assets, field_of_interest, type, profit_on_past_investments } = req.body;

//     try {
//         // Create a new user entry
//         const newUser = new User({ email_id: email, type });
//         await newUser.save();

//         // Insert data into the appropriate collection
//         if (type === 'Entrepreneur') {
//             const newEntrepreneur = new Entrepreneur({ email_id: email, name, phone, address, assets, field_of_interest });
//             await newEntrepreneur.save();
//         } else if (type === 'Mentor') {
//             const newMentor = new Mentor({ email_id: email, name, phone, address, assets, field_of_interest });
//             await newMentor.save();
//         } else if (type === 'Investor') {
//             const newInvestor = new Investor({ email_id: email, name, phone, address, assets, field_of_interest, profit_on_past_investments });
//             await newInvestor.save();
//         }

//         res.status(201).send('User registered successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Entrepreneur = require('../models/Entrepreneur');
const Mentor = require('../models/Mentor');
const Investor = require('../models/Investor');
const User = require('../models/User');
const FieldOfInterest = require('../models/FieldOfInterest');


// POST route to fetch data by type and interest
router.post('/getDataByTypeAndInterest', async(req, res) => {
    const { type, field_of_interest } = req.body;

    try {
        let data;
        if (type === 'Entrepreneur') {
            data = await Entrepreneur.find({ field_of_interest });
        } else if (type === 'Mentor') {
            data = await Mentor.find({ field_of_interest });
        } else if (type === 'Investor') {
            data = await Investor.find({ field_of_interest });
        }

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server error');
    }
});
router.post('/register', async(req, res) => {
    const { email, name, phone, address, assets, field_of_interest, type, profit_on_past_investments } = req.body;

    // Log received data for debugging
    console.log('Received data:', req.body);

    try {
        // Create a new user entry
        const newUser = new User({ email_id: email, type });
        await newUser.save();

        // Insert data into the appropriate collection
        if (type === 'Entrepreneur') {
            const newEntrepreneur = new Entrepreneur({ email_id: email, name, phone, address, assets, field_of_interest });
            await newEntrepreneur.save();
        } else if (type === 'Mentor') {
            const newMentor = new Mentor({ email_id: email, name, phone, address, assets, field_of_interest });
            await newMentor.save();
        } else if (type === 'Investor') {
            const newInvestor = new Investor({ email_id: email, name, phone, address, assets, field_of_interest, profit_on_past_investments });
            await newInvestor.save();
        }

        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Server error');
    }
});

router.post('/getUserData', async(req, res) => {
    const { email } = req.body;

    try {
        // Fetch user type
        const user = await User.findOne({ email_id: email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        let userData;
        if (user.type === 'Entrepreneur') {
            userData = await Entrepreneur.findOne({ email_id: email });
        } else if (user.type === 'Mentor') {
            userData = await Mentor.findOne({ email_id: email });
        } else if (user.type === 'Investor') {
            userData = await Investor.findOne({ email_id: email });
        }

        if (!userData) {
            return res.status(404).send('User data not found');
        }

        res.status(200).json({ userData, type: user.type });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

router.post('/rateMentor', async(req, res) => {
    const { mentorId, rating } = req.body;

    try {
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ error: 'Mentor not found' });
        }

        mentor.ratings.push(rating);
        if (mentor.ratings.length > 5) {
            mentor.ratings.shift(); // Remove the oldest rating
        }

        mentor.averageRating =
            mentor.ratings.reduce((acc, curr) => acc + curr, 0) / mentor.ratings.length;

        await mentor.save();
        res.json({ success: true, averageRating: mentor.averageRating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// routes/mentor.js
router.post('/pair', async(req, res) => {
    const { entrepreneurId } = req.body;

    try {
        const entrepreneur = await Entrepreneur.findById(entrepreneurId);
        if (!entrepreneur) {
            return res.status(404).json({ error: 'Entrepreneur not found' });
        }

        const mentors = await Mentor.find({ field_of_interest: entrepreneur.field_of_interest })
            .sort({ averageRating: -1 }) // Sort by average rating in descending order
            .limit(5);

        res.json({ mentors });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// // const FieldOfInterest = require('../models/FieldOfInterest');

// router.get('/fieldOfInterest', async(req, res) => {
//     try {
//         const interests = await FieldOfInterest.find();
//         res.status(200).json(interests);
//     } catch (error) {
//         console.error('Error fetching field of interests:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });


// // POST route to add a new field of interest
// router.post('/add', async(req, res) => {
//     const { value } = req.body;

//     try {
//         const existingInterest = await FieldOfInterest.findOne({ value });
//         if (existingInterest) {
//             return res.status(400).json({ error: 'Field of interest already exists' });
//         }

//         const newInterest = new FieldOfInterest({ value });
//         await newInterest.save();

//         res.status(201).json({ message: 'Field of interest added successfully' });
//     } catch (error) {
//         console.error('Error adding field of interest:', error);
//         res.status(500).send('Server error');
//     }
// });


// Get all field of interests
router.get('/fieldOfInterests', async(req, res) => {
    try {
        const interests = await FieldOfInterest.find();
        res.status(200).json(interests);
    } catch (error) {
        console.error('Error fetching field of interests:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Add a new field of interest
router.post('/fieldOfInterests/add', async(req, res) => {
    const { value } = req.body;

    try {
        const existingInterest = await FieldOfInterest.findOne({ value });
        if (existingInterest) {
            return res.status(400).json({ error: 'Field of interest already exists' });
        }

        const newInterest = new FieldOfInterest({ value });
        await newInterest.save();

        res.status(201).json({ message: 'Field of interest added successfully' });
    } catch (error) {
        console.error('Error adding field of interest:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;