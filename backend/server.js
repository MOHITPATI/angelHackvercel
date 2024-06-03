// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const dbURI = 'your_mongodb_connection_string_here';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Import routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// const http = require('http');
// const { Server } = require('socket.io');
// const server = http.createServer(app);
// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     // Handle disconnection
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     // Handle chat messages
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });

//     // Handle WebRTC signaling
//     socket.on('signal', (data) => {
//         socket.broadcast.emit('signal', data);
//     });
// });


// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });


// const fieldOfInterestRouter = require('./routes/users.js');

// // Mount the router
// app.use('/api', fieldOfInterestRouter);
// // Middleware
// app.use(cors());
// app.use(bodyParser.json());


// // MongoDB connection
// const dbURI = 'mongodb+srv://mohitpati52:FgDDD0ExtlWdcDsR@angelhack-db.bmf4udu.mongodb.net/?retryWrites=true&w=majority&appName=angelHack-db'; // Replace with your MongoDB Atlas connection string
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Import routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

app.use(cors(
    {
        origin : ["https://deploy-mern-1whq.vercel.app"],
        method : ["POST","GET"],
        credentials : true 
    }    
));

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });

//     socket.on('signal', (data) => {
//         socket.broadcast.emit('signal', data);
//     });
// });

// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });

app.use(cors());
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://mohitpati52:FgDDD0ExtlWdcDsR@angelhack-db.bmf4udu.mongodb.net/?retryWrites=true&w=majority&appName=angelHack-db';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// const express = require('express');
// const mongodb = require('mongodb');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// const http = require('http');
// const { Server } = require('socket.io');
// const server = http.createServer(app);
// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });

//     socket.on('signal', (data) => {
//         socket.broadcast.emit('signal', data);
//     });
// });

// server.listen(port, () => {
//     console.log(`listening on *:${port}`);
// });

// app.use(cors());
// app.use(bodyParser.json());

// const MongoClient = mongodb.MongoClient;

// const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/angelhack'; // Fallback to localhost for non-docker environments

// MongoClient.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('Failed to connect to MongoDB:', err);
//     } else {
//         console.log('Connected to MongoDB');
//         const db = client.db();
//         const userRoutes = require('./routes/users')(db);
//         app.use('/api/users', userRoutes);
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

// const express = require('express');
// const mongodb = require('mongodb');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// const http = require('http');
// const { Server } = require('socket.io');
// const server = http.createServer(app);
// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });

//     socket.on('signal', (data) => {
//         socket.broadcast.emit('signal', data);
//     });
// });

// server.listen(port, () => {
//     console.log(`listening on *:${port}`);
// });

// app.use(cors());
// app.use(bodyParser.json());

// const MongoClient = mongodb.MongoClient;

// const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/angelhack'; // Fallback to localhost for non-docker environments

// MongoClient.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('Failed to connect to MongoDB:', err);
//     } else {
//         console.log('Connected to MongoDB');
//         const db = client.db();
//         const userRoutes = require('./routes/users')(db);
//         app.use('/api/users', userRoutes);
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
