//VUEFIRE WHEN SUPPORTED
// import { firestorePlugin } from 'vuefire';
// Vue.use(firestorePlugin);


import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyChs5cKMvj26dtSY7B8DNw5g0acnqujqLU",
    authDomain: "chicco-optical.firebaseapp.com",
    databaseURL: "https://chicco-optical.firebaseio.com",
    projectId: "chicco-optical",
    storageBucket: "chicco-optical.appspot.com",
    messagingSenderId: "786905969886",
    appId: "1:786905969886:web:cea1f4835e2e3cbfadbe4f",
    measurementId: "G-KEM1FMXPV0"
};


const db = firebase.initializeApp(firebaseConfig);

// const firestore = {
//     glasses: db.collection('glasses'),
//     contacts: db.collection('contacts'),
//     sunglasses: db.collection('sunglasses')
// }

export default db;