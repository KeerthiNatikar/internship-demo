console.log("added js");


function verify(){
    const inputPassword = document.querySelector('#inputPassword')
    const confirmPassword = document.querySelector('#confirmPassword')
    const passwordAlert = document.querySelector('#Password')


    if(inputPassword.value !== confirmPassword.value){
       passwordAlert.innerHTML="not matching";
        passwordAlert.style.display = "block"
    }else{
        console.log("password doesn't match");
        passwordAlert.style.display = "none"
    }
 }



 let fruits =["mango","orange","banana"]
 console.log(fruits);


 const details=[
    {
        name:"keerthi",
        role:"student",
    }

 ]
 console.log(details);
 fruits.push("grapes");
 console.log(fruits);
 let lastFruit=fruits.pop();
 console.log(fruits);

 