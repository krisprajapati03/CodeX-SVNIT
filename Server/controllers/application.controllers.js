const Application = require("../models/application.models");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const Admin = require("../models/admin.models");

// Pinata API keys (Use .env for security)
const PINATA_API_KEY = "4f190cdac2fb339ad2b7";
const PINATA_SECRET_API_KEY = "1cb30396f6964b073f22c0e5e938e6243ae2fc4dc5ccc5a69711b1129bd79f29";

// Function to upload a file to Pinata
const uploadToPinata = async (filePath, originalName) => {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_SECRET_API_KEY,
            },
        });

        const cid = response.data.IpfsHash;
        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${cid}`;

        // Clean up uploaded file
        fs.unlinkSync(filePath);

        return { name: originalName, cid, url: ipfsUrl };
    } catch (error) {
        console.error("Error uploading to Pinata:", error.message);
        throw error;
    }
};

// Create and Save a new Application with document uploads
exports.create = async (req, res) => {
    try {
        // Validate request
        if (!req.body || !req.body.title || !req.body.description || !req.body.citizen) {
            return res.status(400).json({ message: "Title, description, and citizen ID are required!" });
        }

        const { title, description, data, citizen, gov, govorg, status } = req.body;

        // Handle document uploads
        let uploadedDocuments = [];
        if (req.files && req.files.length > 0) {
            uploadedDocuments = await Promise.all(
                req.files.map(async (file) => {
                    return await uploadToPinata(file.path, file.originalname);
                })
            );
        }

        // Create Application instance
        const newApplication = new Application({
            title,
            description,
            data,
            documents: uploadedDocuments,
            citizen,
            gov,
            govorg,
            status: status || "Pending",
        });

        // Save Application in database
        const savedApplication = await newApplication.save();
        res.status(201).json({ message: "Application created successfully!", application: savedApplication });
    } catch (err) {
        console.error("Error creating application:", err.message);
        res.status(500).json({ message: "Error creating application", error: err.message });
    }
};

exports.getApplicationbyId = async(req,res) => {
    try {
        const { id } = req.params;
        const application = await Application.findById(id);
        if (!application) {
            return res.status(404).json({ message: `Application with id ${id} not found!` });
        }
        res.json(application);
    } catch (err) {
        console.error("Error finding application by id:", err.message);
        res.status(500).json({ message: "Error finding application by id", error: err.message });
    }
}

// Retrieve and return all applications from the database.
exports.updateStatus = async (req, res) => {
    try {
        // Validate request
        if (!req.body || !req.body.status) {
            return res.status(400).json({ message: "Status is required!" });
        }

        const { status } = req.body;
        const { id } = req.params;

        // Find application and update it with the request body
        const updatedApplication = await Application.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedApplication) {
            return res.status(404).json({ message: `Application with id ${id} not found!` });
        }

        res.json({ message: "Application status updated successfully!", application: updatedApplication });
    } catch (err) {
        console.error("Error updating application status:", err.message);
        res.status(500).json({ message: "Error updating application status", error: err.message });
    }
};

// Retrieve and return all applications from the database.
exports.findAll = async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (err) {
        console.error("Error finding all applications:", err.message);
        res.status(500).json({ message: "Error finding all applications", error: err.message });
    }
};

exports.getApplicationbyAdmin = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        if (!adminId) {
            return res.status(400).json({ message: "Admin ID is required!" });
        }

        // Find admin and populate the applications
        const admin = await Admin.findById(adminId).populate({
            path: "applications",
            populate: { path: "citizen gov govorg" } // Populating referenced fields
        });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found!" });
        }

        res.status(200).json({ applications: admin.applications });
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
};

// Retrive application by citizen, govorg or gov

exports.getApplicationbyCitizen = async (req, res) => {
    try {
        const citizenId = req.params.citizenId;

        if (!citizenId) {
            return res.status(400).json({ message: "Citizen ID is required!" });
        }

        const applications = await Application.find({ citizen: citizenId });

        res.status(200).json({ applications });
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
}

exports.getApplicationbyGov = async (req, res) => {
    try {
        const govId = req.params.govId;

        if (!govId) {
            return res.status(400).json({ message: "Gov ID is required!" });
        }

        const applications = await Application.find({ gov: govId });

        res.status(200).json({ applications });
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
}

exports.getApplicationbyGovorg = async (req, res) => {
    try {
        const govorgId = req.params.govorgId;

        if (!govorgId) {
            return res.status(400).json({ message: "Govorg ID is required!" });
        }

        const applications = await Application.find({ govorg: govorgId });

        res.status(200).json({ applications });
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
}
