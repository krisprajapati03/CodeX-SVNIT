const Govorg = require('../models/gov.models.js');

exports.loginOrCreate = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await Govorg.findOne({ email });

        if (user) {
            // Compare passwords directly (not recommended for production)
            if (password === user.password) {
                return res.send({ email: user.email, name: user.name });
            } else {
                return res.status(401).send({ message: "Invalid Password!" });
            }
        } 
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
};
