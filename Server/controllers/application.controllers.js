const Application = require("../models/application.models");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const multer = require('multer');
const path = require('path');
const Gov = require("../models/gov.models");
const Citizen = require("../models/citizen.models");


// Pinata API keys (Use .env for security)
// const PINATA_API_KEY = "4f190cdac2fb339ad2b7";
// const PINATA_SECRET_API_KEY = "1cb30396f6964b073f22c0e5e938e6243ae2fc4dc5ccc5a69711b1129bd79f29";

// Function to upload a file to Pinata
// const uploadToPinata = async (filePath, originalName) => {
//     const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

//     const formData = new FormData();
//     formData.append("file", fs.createReadStream(filePath));

//     try {
//         const response = await axios.post(url, formData, {
//             headers: {
//                 "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
//                 pinata_api_key: PINATA_API_KEY,
//                 pinata_secret_api_key: PINATA_SECRET_API_KEY,
//             },
//         });

//         const cid = response.data.IpfsHash;
//         const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${cid}`;

//         // Clean up uploaded file
//         fs.unlinkSync(filePath);

//         return { name: originalName, cid, url: ipfsUrl };
//     } catch (error) {
//         console.error("Error uploading to Pinata:", error.message);
//         throw error;
//     }
// };

// Pinata configuration
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
            maxBodyLength: Infinity,
        });

        const cid = response.data.IpfsHash;
        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${cid}`;

        // Clean up uploaded file
        fs.unlinkSync(filePath);

        return { name: originalName, cid, url: ipfsUrl };
    } catch (error) {
        console.error("Error uploading to Pinata:", error);
        // Clean up file if upload fails
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        throw error;
    }
};

exports.create = async (req, res) => {
    try {
        // Extract all required fields from request body
        const {
            title,
            description,
            data,
            citizen, // This should be an email
            fullName,
            mobile,
            email,
            applicationType
        } = req.body;

        // Validate all required fields
        const requiredFields = [
            'title',
            'description',
            'data',
            'citizen',
            'fullName',
            'mobile',
            'email',
            'applicationType'
        ];

        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                message: "Missing required fields!",
                missingFields
            });
        }

        // Find citizen based on email
        let citizen_ = await Citizen.findOne({ email: citizen });
        
        if (!citizen_) {
            return res.status(404).json({
                message: "Citizen not found! Please register first."
            });
        }

        // Handle document uploads
        let uploadedDocuments = [];
        if (req.files && req.files.length > 0) {
            // Upload each file to Pinata
            uploadedDocuments = await Promise.all(
                req.files.map(async (file) => {
                    try {
                        return await uploadToPinata(file.path, file.originalname);
                    } catch (error) {
                        console.error(`File upload failed: ${file.originalname}`, error);
                        return { error: "Upload failed", filename: file.originalname };
                    }
                })
            );

            // Filter out failed uploads
            uploadedDocuments = uploadedDocuments.filter(doc => !doc.error);
        }

        // Create new application
        const newApplication = new Application({
            title,
            description,
            data,
            documents: uploadedDocuments,
            citizen: citizen_._id,
            fullName,
            mobile,
            email,
            applicationType,
            status: 'Pending',
            applicationAt: 'Taluka' // Default starting level
        });

        // Save application
        const savedApplication = await newApplication.save();

        // Update citizen's applications (if you maintain this relationship)
        await Citizen.findByIdAndUpdate(
            citizen_._id,
            { $push: { applications: savedApplication._id } },
            { new: true }
        );


        return res.status(201).json({
            message: "Application created successfully!",
            application: savedApplication
        });

    } catch (err) {
        console.error("Error creating application:", err);
        return res.status(500).json({
            message: "Error creating application",
            error: err.message
        });
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

exports.getApplicationbyCitizen = async (req, res) => {
    try {
        const email = req.params.email;

        if (!email) {
            return res.status(400).json({ message: "Citizen ID is required!" });
        }

        // Find the citizen by email
        const citizen = await Citizen.findOne({ email });

        if (!citizen) {
            return res.status(404).json({ message: "Citizen not found!" });
        }

        // Find applications for that citizen using their ID (_id)
        const applications = await Application.find({ citizen: citizen._id });

        res.status(200).json({ applications });
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
}


exports.getApplicationbyGov = async (req, res) => {
    try {
      let govId = req.params.name;
  
      if (!govId) {
        return res.status(400).json({ message: "Gov ID is required!" });
      }
  
      // Format govId (if needed)
      govId = govId.charAt(0).toUpperCase() + govId.slice(1).toLowerCase();
  
      // Fetch applications
      const applications = await Application.find({ applicationAt: govId });
  
      if (applications.length === 0) {
        return res.status(404).json({ message: "No applications found for the given Gov ID." });
      }
  
      res.status(200).json({ applications });
    } catch (error) {
      console.error("Error fetching applications:", error.message);
      res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
};


exports.updateLevel = async (req, res) => {
    try {
        const { id } = req.params;  // Change applicationId to id
        const { applicationAt } = req.body;

        if (!id || !applicationAt) {
            return res.status(400).json({ message: "Application ID and Application At are required!" });
        }

        const updatedApplication = await Application.findByIdAndUpdate(id, { applicationAt }, { new: true });

        if (!updatedApplication) {
            return res.status(404).json({ message: `Application with id ${id} not found!` });
        }

        res.json({ message: "Application level updated successfully!", application: updatedApplication });

    } catch (error) {
        console.error("Error updating application level:", error.message);
        res.status(500).json({ message: "Error updating application level", error: error.message });
    }
};
