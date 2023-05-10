let userNameAlert = document.querySelector('.alert');
let NameAlert = document.querySelector('.alertname');
let EmailAlert = document.querySelector('.alert_email');
let ConfirmPasswordAlert = document.querySelector('.confirm_alert');
let PhoneNumberAlert = document.querySelector('.Phonealert');
let form = document.querySelector('.form_area');


form.addEventListener('submit',handleEvent);

function  handleEvent (event){
    event.preventDefault();
       
      let userName = event.target.elements.username.value.split("");
   // 1. userName validity check
  function usernameValidity (){
    if(userName.length <= 4){
        userNameAlert.innerHTML = "username can't be less than 4 characters";
        // event.target.elements.username.classList.add('invalid');
    } else{
        userNameAlert.innerHTML = "";
    }
  } 
  usernameValidity ();
  // 2. name validity check
      



// 3. email = type email
    function emailValidity(){
    let email = event.target.elements.email.value.split("");  
    if(email.includes("@")){
        EmailAlert.innerHTML = "";
    } else{
        EmailAlert.innerHTML = "Not a valid email";
    }
    }
      emailValidity();


// 4. phone number numbers only type in HTML  

function PhoneNumberValidity (){
    let PhoneNumber = event.target.elements.phone_number.value.split("");
    if(PhoneNumber.length < 7){
        PhoneNumberAlert.innerHTML = "username can't be less than 7 characters";
    } else{
        PhoneNumberAlert.innerHTML = "";
    }
  } 
  PhoneNumberValidity ();

function passwordValidity(){
    let Password = event.target.elements.password.value;
    let confirmPassword = event.target.elements.confirm_password.value;
    // console.log(Password === confirmPassword);
     if(Password !== confirmPassword){
        ConfirmPasswordAlert.innerHTML = "Password and confirm password should be same !"
     }else{
        ConfirmPasswordAlert.innerHTML = "";
     }
}
passwordValidity();
}

