const Citizen = require('../models/citizen.models');
const bcrypt = require('bcrypt');


exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
        return res.status(400).send({
            message: "Email and password are required."
        });
    }

    try {
        // Find citizen by email
        const citizen = await Citizen.findOne({ email });

        // Check if citizen exists
        if (!citizen) {
            return res.status(404).send({
                message: `Citizen with email ${email} not found.`
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, citizen.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid password."
            });
        }

        // Successful login
        res.status(200).send({
            email: citizen.email,
            message: "Login successful."
        });
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving citizen data."
        });
    }
};

// Create and Save a new Citizen
exports.create = async (req, res) => {
    // Validate request body
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: "Content cannot be empty!"
        });
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'aadhar', 'password'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
        return res.status(400).send({
            success: false,
            message: `Missing required fields: ${missingFields.join(', ')}`
        });
    }

    try {
        // Hash password
        const hashPassword = bcrypt.hashSync(req.body.password, 10);

        // Create new citizen object
        const newCitizen = new Citizen({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            aadhar: req.body.aadhar,
            password: hashPassword
        });

        // Save citizen in the database
        const data = await Citizen.create(newCitizen)
            
            // Success response
            res.status(201).send({
                success: true,
                message: "Citizen created successfully",
                data: {
                    data: data.data.email, // Remove password from response
                    password: undefined // Remove password from response
                }
            });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error processing request",
            error: error.message
        });
    }
};

