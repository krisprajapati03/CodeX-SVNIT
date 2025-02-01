const Govorg = require('../models/govorg.models.js');
const bcrypt = require('bcrypt');

// Login

exports.login = (req, res) => {
    const email = req.body.govOrgEmail;
    const password = req.body.govOrgPassword;

    Govorg.findByEmail(email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found GovOrg with email ${email}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving GovOrg with email " + email
                });
            }
        } else {
            if (bcrypt.compareSync(password, data.govOrgPassword)) {
                res.send({ email: email });
            } else {
                res.status(401).send({
                    message: "Invalid Password!"
                });
            }
        }
    });
}

// Create and Save a new GovOrg
exports.create = (req, res) => {
    // Validate request
    if (!req.body.govOrgName) {
        return res.status(400).send({
            message: "GovOrg name can not be empty"
        });
    }

    const hashPassword = bcrypt.hashSync(req.body.govOrgPassword, 10);

    // Create a GovOrg
    const govorg = new Govorg({
        govOrgName: req.body.govOrgName,
        govOrgType: req.body.govOrgType,
        govOrgAddress: req.body.govOrgAddress,
        govOrgContact: req.body.govOrgContact,
        govOrgEmail: req.body.govOrgEmail,
        govOrgPassword: hashPassword
    });

    // Save GovOrg in the database
    govorg.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the GovOrg."
            });
        });
};
