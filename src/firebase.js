import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDo652If8cfeHWFrWv_-r_N45mJMm0E4YA",
    authDomain: "lets-chat-c2abb.firebaseapp.com",
    projectId: "lets-chat-c2abb",
    storageBucket: "lets-chat-c2abb.appspot.com",
    messagingSenderId: "845372431960",
    appId: "1:845372431960:web:ffcd9c4b556add29e4742d"
  }).auth();