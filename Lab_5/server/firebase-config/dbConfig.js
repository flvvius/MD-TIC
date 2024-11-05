var admin = require("firebase-admin");

var serviceAccount = require("./chat_app_firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;