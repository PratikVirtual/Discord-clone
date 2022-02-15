import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtZsOCr7RxvdwiZBha3wAB8bXsIsaawc4",
    authDomain: "discord-clone-pro.firebaseapp.com",
    projectId: "discord-clone-pro",
    storageBucket: "discord-clone-pro.appspot.com",
    messagingSenderId: "760056343162",
    appId: "1:760056343162:web:7f8eeb07f3b955286d29c3",
    measurementId: "G-B6HRDNZCL6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;