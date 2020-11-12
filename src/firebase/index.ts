import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue'

Vue.use(firestorePlugin);

const firebaseConfig = {
    apiKey: "AIzaSyChs5cKMvj26dtSY7B8DNw5g0acnqujqLU",
    authDomain: "chicco-optical.firebaseapp.com",
    databaseURL: "https://chicco-optical.firebaseio.com",
    projectId: "chicco-optical",
    storageBucket: "chicco-optical.appspot.com",
    messagingSenderId: "786905969886",
    appId: "1:786905969886:web:23fd4f3beb705ad7adbe4f",
    measurementId: "G-N5TW8ERR5Z"
}


const db = firebase.initializeApp(firebaseConfig);

// const firestore = {
//     glasses: db.collection('glasses'),
//     contacts: db.collection('contacts'),
//     sunglasses: db.collection('sunglasses')
// }

export default db;