import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyC46CsbECKDosUpNmDOPTE1v1NF7vahG_E',
    authDomain: 'vue-firestore-test-f473e.firebaseapp.com',
    databaseURL: 'https://vue-firestore-test-f473e.firebaseio.com',
    projectId: 'vue-firestore-test-f473e',
    storageBucket: 'vue-firestore-test-f473e.appspot.com',
    messagingSenderId: '518603727798',
    appId: '1:518603727798:web:5474f837b9b92f3dbf1717',
    measurementId: 'G-27L03HH75J',
  })
  .firestore();

export default db;
