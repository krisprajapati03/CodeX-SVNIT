const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    documents: [
        {   
            name: {
                type: String,
                required: true
            },
            cid: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    citizen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Citizen'
    },
    fullName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    applicationType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    },
    applicationAt: {
        type: String,
        enum: ['Taluka', 'District', 'State'],
    }
}, {timestamps: true});

module.exports = mongoose.model('Application', applicationSchema);