function formValidate(){
    const userName= document.forms.signUp.name.value;
    const userEmail = document.forms.signUp.email.value;
    const signUp = document.forms.signUp.value;
    const initialPassword = document.forms.signUp.password.value;
    const finalPassword = document.forms.signUp.password1.value;
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const signUpName = /\d+$/g; 
    
    if(userName == "" || signUpName.test(userName)){
        alert("Please enter your name properly.");
        return false;
    }
    if(userEmail == "" || !emailValidate.test(userEmail)){
        alert("Please enter a valid email.");
        return false;
    }
    if(initialPassword == ""){
        alert("Please enter your password");
        return false;
    }
    else if(initialPassword.length < 4){
        alert("Password can't be less than four");
        return false;
    }
    if(initialPassword != finalPassword){
        alert("Password Mismatch");
        return false;
    }  
}

