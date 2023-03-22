import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFI0HQ03OfktFb5Rxq9V6pk6ybY_TTTgE",
  authDomain: "chaitu-project-65423.firebaseapp.com",
  projectId: "chaitu-project-65423",
  storageBucket: "chaitu-project-65423.appspot.com",
  messagingSenderId: "776540787186",
  appId: "1:776540787186:web:cf0fd1791c24e37f221b6b",
  measurementId: "G-2ME0QZWQ30"
};


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }
