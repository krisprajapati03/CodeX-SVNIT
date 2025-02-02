const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const citizen = require('../controllers/citizen.controllers');
const gov = require('../controllers/gov.controllers');
const application = require('../controllers/application.controllers');


router.post('/citizen', citizen.create); // Create a new Citizen
router.post('/login', citizen.login); // Citizen Login

router.post('/application', upload.array('documents', 5), application.create); // Create an Application (with Auth)
router.get('/application', application.findAll); // Get all Applications
router.get('/application/:id', application.getApplicationbyId); // Get Application by ID
router.put('/application/:id', application.updateStatus); // Update Application by ID

router.post('/govlogin', gov.loginOrCreate);

// Application filtering by role
router.get('/application/citizen/:email', application.getApplicationbyCitizen); // Get Applications by Citizen
router.get('/application/gov/:name', application.getApplicationbyGov); // Get Applications by Gov

router.get('/application/updatelevel/:applicationId', application.updateLevel); // Update Application Level

module.exports = router;
