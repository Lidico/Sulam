import firebase from "firebase";
const config = {
    apiKey: "AIzaSyB4fO4th05i5AD0HesxXE-Q4X5HekMMUkU",
    authDomain: "sulamlaatid.firebaseapp.com",
    databaseURL: "https://sulamlaatid.firebaseio.com",
    projectId: "sulamlaatid",
    storageBucket: "sulamlaatid.appspot.com",
    messagingSenderId: "882374524539",
    appId: "1:882374524539:web:f99c2cd65cd54c1b"
};
firebase.initializeApp(config);
export default firebase;