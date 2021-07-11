import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDTmhsad6GJSgv1Av-ViRqIaHwzRM4fg3k",
  authDomain: "muso-ninjas-9ff84.firebaseapp.com",
  projectId: "muso-ninjas-9ff84",
  storageBucket: "muso-ninjas-9ff84.appspot.com",
  messagingSenderId: "1021090377552",
  appId: "1:1021090377552:web:1e29ed94f66b2d73f10655"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }