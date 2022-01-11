import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {

    apiKey: "AIzaSyBZA8nByoXWrKQblV9TVqRSqO-ZE-uXH_w",
  
    authDomain: "chaitu-project-plan.firebaseapp.com",
  
    projectId: "chaitu-project-plan",
  
    storageBucket: "chaitu-project-plan.appspot.com",
  
    messagingSenderId: "505134212297",
  
    appId: "1:505134212297:web:7c535e71680b1f05f11918",
  
    measurementId: "G-E4K4TG1PMC"
  
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }
