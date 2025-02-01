const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    application: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }]
}, {timestamps: true});

module.exports = mongoose.model('Citizen', citizenSchema);