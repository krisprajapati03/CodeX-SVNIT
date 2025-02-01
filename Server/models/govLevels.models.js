const mongoose = require('mongoose');

const govLevelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }]
}, {timestamps: true});

module.exports = mongoose.model('GovLevels', govLevelsSchema);