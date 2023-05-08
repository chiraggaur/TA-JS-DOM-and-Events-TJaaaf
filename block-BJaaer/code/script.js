// form filling 

// let form = document.querySelector('#form');
//  let submit = document.querySelector('.submit');
// let formInfo = {};

// form.addEventListener('submit',handleEvent);

//   function handleEvent(event){
//     event.preventDefault();
//    formInfo.name = form.elements.text.value;
//    formInfo.email = form.elements.mail.value;
//    formInfo.love = form.elements.gender.value;
//    formInfo.color = form.elements.color.value;
//    formInfo.rate = form.elements.range.value;
//    formInfo.genre = form.elements.drone.value;
//    formInfo.terms = form.elements.terms.checked;
// //    console.log(formInfo);
// //    console.dir(form);
// }   

// submit.addEventListener('click',function(event){
//     console.log(event);
// })



// custom code 

let form = document.querySelector('#form');
// model deatils 
let text = document.querySelector('.M_name');
let email = document.querySelector('.M_email');
let love = document.querySelector('.M_love');
let color = document.querySelector('.M_color');
let rating = document.querySelector('.M_rating');
let genre = document.querySelector('.M_genre');
let terms = document.querySelector('.M_terms');
form.addEventListener('submit',handleEvent);

let formInfo = {};

function handleEvent(event){
   event.preventDefault();
  //  console.log("Hello");
   formInfo.Name = form.elements.text.value;
   formInfo.Email = form.elements.mail.value;
   formInfo.Gender = form.elements.gender.value;
   formInfo.ColorPicked = form.elements.colors.value;
   formInfo.Rated = form.elements.range.value;
   formInfo.Genre = form.elements.drone.value;
   formInfo.Terms = form.elements.terms.checked;

   console.log(formInfo);
   // model values 
  text.innerHTML = `Hello : ${formInfo.Name}`;
   email.innerHTML = `Email : ${formInfo.Email}`;
   love.innerHTML = `You Love : ${formInfo.Gender}`;
   color.innerHTML = `Color :${formInfo.ColorPicked}`;
   rating.innerHTML = `Rating : ${formInfo.Rated}`;
   genre.innerHTML = ` Book Genre : ${formInfo.Genre} ${formInfo.ColorPicked}`;

   if(formInfo.Terms === true){
    terms.innerHTML = '👉 You agree to terms and conditions ';
   } else {
    terms.innerHTML = '👉 please agree to terms and conditions ';
   }

}

