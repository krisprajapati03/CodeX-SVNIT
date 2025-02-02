const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/v1.router');
const bodyParser = require('body-parser');
require('dotenv').config();  // For using environment variables
const cors = require('cors')

const app = express();



app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


// Middleware for parsing request bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api/v1', router);  // Prefixed with '/api/v1' for versioning

// Catch-all route for unmatched routes
app.get('*', (req, res) => {
    res.status(404).send('Route not found');
});

// MongoDB Connection
mongoose
    .connect('mongodb://localhost:27017/CodeX-SVNIT')
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
