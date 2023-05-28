// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
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

function writeUserData(user) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: user.name,
    email: user.email,
    password: user.password,
    
    
  });
  alert("done");
}


const email=document.getElementById("exampleInputEmail1");
const password=document.getElementById("exampleInputPassword1");
const name=document.getElementById("inlineFormInputName2");
const user=document.getElementById("inlineFormInputGroupUsername2");
const ver=document.getElementById("verif");

window.sign=function(e){
e.preventDefault();
var obj ={
email:email.value,
name:name.value,
userNAME:user.value,
password:password.value,
}   
createUserWithEmailAndPassword(auth,obj.email,obj.password,obj.userNAME,obj.name).then(function(){
   
  ver.innerHTML="You have successfully registered"
  ver.style.color="green";
  ver.classList.add('animate__fadeInDown');
  writeUserData(obj)


    setTimeout(() => {
      location.reload();
    }, "4000");
  

})
.catch(function(err){
  ver.innerHTML=err
  ver.style.color="red";
  ver.classList.add(' animate__fadeInDown');
  
})

};