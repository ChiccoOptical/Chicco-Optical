import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue'

Vue.use(firestorePlugin);
const db = firebase.initializeApp({ projectId: 'chicco-optical' }).firestore()

const firestore = {
    glasses: db.collection('glasses'),
    contacts: db.collection('contacts'),
    sunglasses: db.collection('sunglasses')
}

export default firestore;