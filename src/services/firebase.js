import firebase from "firebase/app";
import "firebase/firestore";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional






const firebaseConfig = {
    apiKey: "AIzaSyCa4rBk8o_Fj3P7oYB_t3ReCa5khzjq5EU",
    authDomain: "warsmania-b16ef.firebaseapp.com",
    projectId: "warsmania-b16ef",
    storageBucket: "warsmania-b16ef.appspot.com",
    messagingSenderId: "764112833342",
    appId: "1:764112833342:web:1010a358c6351d9e737a6f",
    measurementId: "G-JYN6BSP1VY"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;