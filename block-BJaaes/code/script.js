let userNameAlert = document.querySelector('.alert');
let NameAlert = document.querySelector('.alertname');
let EmailAlert = document.querySelector('.alert_email');
let ConfirmPasswordAlert = document.querySelector('.confirm_alert');
let PhoneNumberAlert = document.querySelector('.Phonealert');
// let formControl = document.querySelector('.text_field');
let form = document.querySelector('.form_area');


form.addEventListener('submit',handleEvent);

function  handleEvent (event){
    event.preventDefault();
      let elm = event.target.elements;
      let userName = elm.username.value.split("");
   // 1. userName validity check
  function usernameValidity (){
    if(userName.length <= 4){
        userNameAlert.innerHTML = "username can't be less than 4 characters";
        elm.username.classList.add('error');
        // event.target.elements.username.classList.add('invalid');
    } else{
        userNameAlert.innerHTML = "";
        elm.username.classList.add('success');
    }
  } 
  usernameValidity ();
  // 2. name validity check
      function nameValidity(){
        
        let Name = elm.name.value;
        if(!isNaN(Name)){
            NameAlert.innerHTML = "You can't use number in the name field";
            elm.name.classList.add('error');
        } else{
            NameAlert.innerHTML = " ";
            elm.name.classList.add('success');
        }
      }
         nameValidity();


// 3. email = type email
    function emailValidity(){
    let email = elm.email.value.split("");  
    if(email.includes("@")){
        EmailAlert.innerHTML = "";
        elm.email.classList.add('success');
    } else{
        EmailAlert.innerHTML = "Not a valid email";
        elm.email.classList.add('error');
    }
    }
      emailValidity();


// 4. phone number numbers only type in HTML  

function PhoneNumberValidity (){
    let PhoneNumber = elm.phone_number.value.split("");
    if(PhoneNumber.length < 7){
        PhoneNumberAlert.innerHTML = "username can't be less than 7 characters";
        elm.phone_number.classList.add('error');
    } else{
        PhoneNumberAlert.innerHTML = "";
        elm.phone_number.classList.add('success');
    }
  } 
  PhoneNumberValidity ();

function passwordValidity(){
    let Password = elm.password.value;
    let confirmPassword = elm.confirm_password.value;
    // console.log(Password === confirmPassword);
     if(Password !== confirmPassword){
        ConfirmPasswordAlert.innerHTML = "Password and confirm password should be same !"
        elm.password.classList.add('error');
        elm.confirm_password.classList.add('error');
     }else{
        ConfirmPasswordAlert.innerHTML = "";
        elm.password.classList.add('success');
        elm.confirm_password.classList.add('success');
     }
}
passwordValidity();

}

