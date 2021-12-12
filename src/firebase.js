// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD99GGUdIjWs21kneODdQX2EavKDuLJfdQ",
    authDomain: "whatsapp-mern-c2c07.firebaseapp.com",
    projectId: "whatsapp-mern-c2c07",
    storageBucket: "whatsapp-mern-c2c07.appspot.com",
    messagingSenderId: "382779531014",
    appId: "1:382779531014:web:03858657b518b86adb8887",
    measurementId: "G-CG53G82EJC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(); //get the database access
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); //For Google Authentication

  export {auth,provider}; //Explicit export
  export default db; //Default Export