// firebase template
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2TSgggxf8xo9O1HF5hnWY5003p44ekSk',
  authDomain: 'clone-174af.firebaseapp.com',
  projectId: 'clone-174af',
  storageBucket: 'clone-174af.appspot.com',
  messagingSenderId: '450398725380',
  appId: '1:450398725380:web:f9c478926fc50631d5dc51',
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // connects our frontend to the fb backend
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
