import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyxXa12IzDU5zUW8A_s1KlsNNnrQSQCRs",
  authDomain: "miniblogreact-7fee6.firebaseapp.com",
  projectId: "miniblogreact-7fee6",
  storageBucket: "miniblogreact-7fee6.appspot.com",
  messagingSenderId: "718221034579",
  appId: "1:718221034579:web:47773e6d3bbb06ff65b2a6",
  measurementId: "G-P94R7WPVWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };