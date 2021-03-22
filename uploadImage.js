var admin = require("firebase-admin");
var serviceAccount = require("./react-firebase-key.json");
var randomId = require("random-id");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-19b73.firebaseio.com",
  storageBucket: "react-19b73.appspot.com",
});
const bucket = admin.storage().bucket();
const firestore = admin.firestore();
// var img_index = 1;
// // ar storageRef = firebase.storage().ref();
// // var listRef = storageRef.child('images');
// bucket..then(function(result){
//     console.log(result);
//     result.items.forEach(function(imgRef){
//         imgRef.getDownloadURL().then(function(url){
//             var img = $('<img />').attr({
//                 'id': 'poster'+img_index,
//                 'src': url,
//                 'alt': 'image',
//                 'title': 'image',
//                 'width': 250
//             }).appendTo('#img-area');

//             img_index++;
//         });
//     })
// }).catch(function(error){
//     console.log(error);
// });

const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "images");

fs.readdir(directoryPath, function (err, files) {

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      console.log("./images/" + file)

      bucket.upload("./images/" + file, { destination: 'images/' + file
      }).then((res) => {
        console.log(res);
   
      }).catch(err => {
        console.error('ERROR:', err);
      });

    });
})