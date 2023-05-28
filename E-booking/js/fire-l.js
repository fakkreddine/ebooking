// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {    
     //your firebase api key
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
function admin(){
  window.location.href = "admin.html";

} 




const email=document.getElementById("exampleInputEmail1");
const password=document.getElementById("exampleInputPassword1");
const ver=document.getElementById("verif");



window.sign=function(e){
e.preventDefault();
var obj ={
email:email.value,
password:password.value,
}   
signInWithEmailAndPassword(auth,obj.email,obj.password).then(function(userCredential){
  const user = userCredential.user;
   if (email.value=="admin@gmail.com"){
    console.log("you are admin");
    console.log(user);
    admin();
   }
    ver.innerHTML="You have successfully Log in";
    ver.style.color="green";
    ver.classList.add('animate__fadeInDown');
   
   console.log(user)
    
   document.getElementById("exampleInputPassword1").classList.add('is-valid');

  


    setTimeout(() => {
            
    }, "5000");
  

})
.catch(function(err){

    ver.innerHTML=err
        ver.style.color="red";
        ver.classList.add('animate__fadeInDown');
        document.getElementById("exampleInputPassword1").classList.add('is-invalid');
      
    setTimeout(() => {
        location.reload();
      }, "5000");
   
  

  
})

};