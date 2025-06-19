import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhFxxpAEnsvlXdm1u8NeBnnpdin6ZtDdw",
    authDomain: "osf-fh-screening.firebaseapp.com",
    projectId: "osf-fh-screening",
    storageBucket: "osf-fh-screening.firebasestorage.app",
    messagingSenderId: "320574385563",
    appId: "1:320574385563:web:0ac19ee84ab5f7e758853e",
    measurementId: "G-GJ671ZN8ZW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdX1VUrAAAAAP6In0yYM7K8UlgpYpc-i8K7Jo12'),
    isTokenAutoRefreshEnabled: true,
});
export const firestore = getFirestore(app);
export const auth = getAuth();
