
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAoAJkzDKDXX4qwDfrnfgTJifmt1icHqco",
    authDomain: "prueba-7825e.firebaseapp.com",
    projectId: "prueba-7825e",
    storageBucket: "prueba-7825e.appspot.com",
    messagingSenderId: "132138237384",
    appId: "1:132138237384:web:088cda156737e3d0fd14fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


        