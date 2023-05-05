// form filling 

let form = document.querySelector('#form');
 let submit = document.querySelector('.submit');
let formInfo = {};

form.addEventListener('submit',handleEvent);

  function handleEvent(event){
    event.preventDefault();
   formInfo.name = form.elements.text.value;
   formInfo.email = form.elements.mail.value;
   formInfo.love = form.elements.gender.value;
   formInfo.color = form.elements.color.value;
   formInfo.rate = form.elements.range.value;
   formInfo.genre = form.elements.drone.value;
   formInfo.terms = form.elements.terms.checked;
//    console.log(formInfo);
//    console.dir(form);
}   

submit.addEventListener('click',function(event){
    console.log(event);
})