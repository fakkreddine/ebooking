function change(){

var x=document.getElementById('exampleCheck1');
const password=document.getElementById("exampleInputPassword1")
var mail=document.getElementById("exampleInputEmail1")
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

password.setAttribute('type', type);
}

