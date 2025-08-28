// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyABz1uB2KTEej2Li2tvkSzX2_iBIoR-KTE",
    authDomain: "plath-app.firebaseapp.com",
    projectId: "plath-app",
    storageBucket: "plath-app.firebasestorage.app",
    messagingSenderId: "133391871975",
    appId: "1:133391871975:web:d2e3efb28e4c089014d742"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();

export { signInWithPopup, signOut };
