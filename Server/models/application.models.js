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
        type: Map,
        of: mongoose.Schema.Types.Mixed
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
    gov: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gov'
    },
    govorg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Govorg'
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    },
    applicationAt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
}, {timestamps: true});

module.exports = mongoose.model('Application', applicationSchema);