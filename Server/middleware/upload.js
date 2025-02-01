const multer = require("multer");
const path = require("path");

// Storage engine
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only images and PDFs are allowed!"), false);
    }
};

// Multer upload middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
