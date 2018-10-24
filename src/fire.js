import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDZdRLW3Mh5YSag1SdHgFuMVzGTNEMA5qk",
  authDomain: "fhactivities-ba3ac.firebaseapp.com",
  databaseURL: "https://fhactivities-ba3ac.firebaseio.com",
  projectId: "fhactivities-ba3ac",
  storageBucket: "fhactivities-ba3ac.appspot.com",
  messagingSenderId: "73050194187"
};
var db = firebase.initializeApp(config);
export default db;
