
var admin = require("firebase-admin"); /* instalar npm i firebase-admin */

var serviceAccount = require("./config/backend-8e4e8-firebase-adminsdk-2da5h-2e27c64075.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const db = admin.firestore()


module.exports = {db}