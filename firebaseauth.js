 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
 import{getAuth,createUserWithEmailAndPassword}from"https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore,setDoc,doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCjLF2XztUewYJ1nwPW2PGtriapi7zATD0",
   authDomain: "fusion-ai-7a8ff.firebaseapp.com",
   projectId: "fusion-ai-7a8ff",
   storageBucket: "fusion-ai-7a8ff.firebasestorage.app",
   messagingSenderId: "894931348888",
   appId: "1:894931348888:web:53f97864a5895ef843cfed",
   measurementId: "G-T34KFE0X7N"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const signup=document.getElementById('submitSignup');
 signup.addEventListener('click',(event)=>{
  event.preventDefault();
 const email=document.getElementById('remail').value;
 const password=document.getElementById('rpassword').value;
 const auth=getAuth();
 const db=getFirestore();
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const userData={
      email:email,
      firstName:firstName,
      lastName:lastName
    };
    })

 })