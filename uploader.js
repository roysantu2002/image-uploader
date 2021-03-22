var admin = require("firebase-admin");
var serviceAccount = require("./react-firebase-key.json");
var randomId = require("random-id");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-19b73.firebaseio.com",
});

const firestore = admin.firestore();
const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "files");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    //console.log("./files/" + file)
    var lastDotIndex = file.lastIndexOf(".");
    var menu = require("./files/" + file);
    var len = 10;
    var pattern = "IDA0";
    var id = "";
    menu.forEach(function (obj) {
      id = randomId(len, pattern);
      firestore
        .collection(file.substring(0, lastDotIndex))
        .doc(id)
        .set(obj)
        .then(function (docRef) {
          console.log("Document written");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  });
});
