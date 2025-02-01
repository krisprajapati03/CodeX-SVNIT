const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.ObjectId,
        ref: 'GovLevels'
    },
    password: {
        type: String,
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Application'
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model('Admin', adminSchema)