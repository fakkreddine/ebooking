


    
    
function mail(){
var vt=false
var x=document.getElementById("exampleInputEmail1").value;
for (let y = 0; y < x.length; y++) {
    if(x[y]=="@"){
        vt=true;
    }
    
}

if (vt) {
    document.getElementById("exampleInputEmail1").classList.replace('is-invalid','is-valid');  
   
}else{
document.getElementById("exampleInputEmail1").classList.add('is-invalid');

}


}




















function number(pw) {
    for (let i = 0; i < pw.length; i++) {
        if (pw[i]in [0,1,2,3,4,5,6,7,8,9,]) {
            return true;
            
        }
        
    }
    return false;
    
}
function up(pw) {
    for (let i = 0; i < pw.length; i++) {
        if (pw[i]>="A"&&pw[i]<="Z") {
            return true;
            
        }
        
    }
    return false;
    
    
}
function ver(){
    var x
    var pw=document.getElementById("exampleInputPassword1").value;
    var r1=document.getElementById("radio1");
    var r2=document.getElementById("radio2");
    var r3=document.getElementById("radio3");
    pw.length>7?r1.checked=true:r1.checked=false;
    number(pw)?r2.checked=true:r2.checked=false;
    up(pw)?r3.checked=true:r3.checked=false;
    if ((r1.checked)&&(r2.checked)&&(r3.checked)) {
        document.getElementById("exampleInputPassword1").classList.replace('is-invalid','is-valid');  
        return true
}else{
    document.getElementById("exampleInputPassword1").classList.add('is-invalid');
    return false
}



}

