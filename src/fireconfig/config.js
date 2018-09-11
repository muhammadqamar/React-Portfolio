import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyDTLsQqJuo5LTCnrOLxMB1eGPVSEBeWqC0",
   authDomain: "portfolio-698ad.firebaseapp.com",
   databaseURL: "https://portfolio-698ad.firebaseio.com",
   projectId: "portfolio-698ad",
   storageBucket: "portfolio-698ad.appspot.com",
   messagingSenderId: "426365310805"
 };
 var fire = firebase.initializeApp(config);
 export default fire
