const Admin = require("../models/admin.models");
const GovLevels = require("../models/govLevels.models");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;

        const admin = await Admin.findById(name);
        if (!admin) {
            return res.status(404).json({ message: `Not found Admin with name ${name}.` });
        }


        if (bcrypt.compareSync(password, admin.password)) {
            res.send({ name: name });
        } else {
            res.status(401).json({ message: "Invalid Password!" });
        }
    } catch (error) {
        console.error("Error logging in Admin:", error.message);
        res.status(500).json({ message: "Error logging in Admin", error: error.message });
    }
}

exports.createAdmin = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Validate request
        if (!name || !password) {
            return res.status(400).json({ message: "Gov Level name and password are required!" });
        }

        // Check if GovLevel exists
        const govLevel = await GovLevels.findById(name);
        if (!govLevel) {
            return res.status(404).json({ message: "Gov Level not found!" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Admin
        const newAdmin = new Admin({
            name: govLevel._id, // Reference to GovLevels ID
            password: hashedPassword,
        });

        // Save Admin
        const savedAdmin = await newAdmin.save();

        res.status(201).json({
            success: true,
            message: "Admin created successfully!",
            data: savedAdmin,
        });

    } catch (error) {
        console.error("Error creating Admin:", error.message);
        res.status(500).json({ success: false, message: "Error creating Admin", error: error.message });
    }
};
