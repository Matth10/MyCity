import firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDGfBp4s5jOLCEOoMoy2WWkGZoQxKBX4qU',
  authDomain: 'mycity-d41fb.firebaseapp.com',
  databaseURL: 'https://mycity-d41fb.firebaseio.com',
  projectId: 'mycity-d41fb',
  storageBucket: 'mycity-d41fb.appspot.com',
  messagingSenderId: '396698242988',
});

export default app;
