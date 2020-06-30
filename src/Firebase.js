import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkpG30hXziCIzkOG3k7b3YxU2cp05VZx8",
    authDomain: "react-spa-62020.firebaseapp.com",
    databaseURL: "https://react-spa-62020.firebaseio.com",
    projectId: "react-spa-62020",
    storageBucket: "react-spa-62020.appspot.com",
    messagingSenderId: "1039368261668",
    appId: "1:1039368261668:web:d5dfb88fbd57ce20db88b1",
    measurementId: "G-96W4FP78JY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;