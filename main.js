   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, googleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
   

  
  const firebaseConfig = {
    apiKey: "AIzaSyClXaV231kWNlmvjpyOlGCavhfPI_vPUoc",
    authDomain: "chefflex-a6bb1.firebaseapp.com",
    projectId: "chefflex-a6bb1",
    storageBucket: "chefflex-a6bb1.appspot.com",
    messagingSenderId: "318957187884",
    appId: "1:318957187884:web:4b4043c607a8356f7d3289",
    measurementId: "G-QK155XKMTQ"
  };

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   auth.languageCode = 'it'
  const provider = new googleAuthProvider();
const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
    .then((result) => {
         const credential = GoogleAuthProvider.credentialFromResult(result); 
         const user = result.user;
        window.location.href = "../index.hbs"

     }).catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message; 
 })

});