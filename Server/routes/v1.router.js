const express = require('express');
const router = express.Router();

const citizen = require('../controllers/citizen.controllers');
const govorg = require('../controllers/govorg.controllers');
const application = require('../controllers/application.controllers');
const govLevels = require('../controllers/govlevels.controllers');


// Citizen Routes
router.post('/citizen', citizen.create); // Create a new Citizen
router.get('/citizen', citizen.findAll); // Get all Citizens
router.post('/login', citizen.login); // Citizen Login

// Government Organization (GovOrg) Routes
router.post('/creategovorg', govorg.create); // Create a new GovOrg

// Government Levels (GovLevels) Routes
router.post('/createGovLevels', govLevels.createAdmin); // Create a new GovLevel

// Application Routes
router.post('/application', application.create); // Create an Application (with Auth)
router.get('/application', application.findAll); // Get all Applications
router.get('/application/:id', application.getApplicationbyId); // Get Application by ID
router.put('/application/:id', application.updateStatus); // Update Application by ID

// Application filtering by role
router.get('/application/admin/:adminId', application.getApplicationbyAdmin); // Get Applications by Admin
router.get('/application/citizen/:citizenId', application.getApplicationbyCitizen); // Get Applications by Citizen
router.get('/application/gov/:govId', application.getApplicationbyGov); // Get Applications by Gov
router.get('/application/govorg/:govorgId', application.getApplicationbyGovorg); // Get Applications by GovOrg

module.exports = router;
