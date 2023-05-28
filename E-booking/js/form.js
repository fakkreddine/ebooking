var cont=0;
function con(){
var f1=document.getElementById("f1");
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");
var f5=document.getElementById("f5");
var bar=document.getElementById("bar");
var bar2=document.getElementById("bar2");
var btn=document.getElementById("btn");
cont+=1;


  if(cont==1){
    f1.style.display="none";
    
    document.documentElement.style.setProperty(' --animate-delay', '1s');
   f2.style.setProperty('--animate-duration', '0.75s');
    f2.classList.add('animate__backInLeft');
    f2.style.display="block";
    bar.innerHTML="40%";
    bar.style.width="40%";
    bar2.style.width="40%";}
    if(cont==2){
        f2.style.display="none";
        f3.style.display="block";
       f3.style.setProperty('--animate-duration', '0.75s');
        f3.classList.add('animate__backInLeft');
       
        bar.innerHTML="60%";
        bar.style.width="60%";
        bar2.style.width="60%";}
    if (cont==3){
        f3.style.display="none";
        f4.style.display="block";

       f4.style.setProperty('--animate-duration', '0.75s');
        f4.classList.add('animate__backInLeft');
       
        bar.innerHTML="80%";
        bar.style.width="80%";
        bar2.style.width="80%";
        btn.innerHTML="SENT";}
    if(cont==4){
        f4.style.display="none";
        f5.style.display="block";

       f5.style.setProperty('--animate-duration', '0.75s');
        f5.classList.add('animate__backInLeft');
       
        bar.innerHTML="100%";
        bar.style.width="100%";
        bar2.style.width="100%";
        


    }
    if (cont==5) {
      
        location.reload();
     
    
      
    }






    }

  












