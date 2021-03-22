// import * as firebaseApp from 'firebase';
//var firebaseApp = require("firebase");

var app = require("firebase");

class firebase {
  /* TODO: For integration, update firebase configuration here */
  config = {
    apiKey: "AIzaSyAbipgg-cCFdio-GnQ95fAhlko1C7UpiDY",
    authDomain: "react-19b73.firebaseapp.com",
    databaseURL: "https://react-19b73.firebaseio.com",
    projectId: "react-19b73",
    storageBucket: "react-19b73.appspot.com",
    messagingSenderId: "915146599372",
    appId: "1:915146599372:web:bc739d75171174faf24b69",
    measurementId: "G-K7PXT2RFQF",
  };

  firebase = app.initializeApp(config);
}
module.exports = firebase;
