const admin = require("firebase-admin");
const firebase = require("firebase/app");
require("firebase/auth"); // For authentication
require("firebase/firestore"); // For Firestore Database

// Load service account key
const serviceAccount = require("./firebase-adminsdk.json");

// Initialize Firebase Admin SDK (for server-side operations)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-project-id.firebaseio.com" // Replace with your Firebase Database URL
});

// Initialize Firebase for client-side authentication
const firebaseConfig = {
    apiKey: "AIzaSyCseld6lO1-7U20kVi4VqAO6l6fDvz31ik",
    authDomain: "mygovtrack-a70f2.firebaseapp.com",
    projectId: "mygovtrack-a70f2",
    appId: "mygovtrack-a70f2"
};

// Initialize Firebase App
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firestore Database
const db = admin.firestore();
const auth = firebase.auth();

// Export Firebase modules
module.exports = { admin, db, firebase, auth };