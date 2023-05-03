//without delegation

let li = document.querySelectorAll('.first li');
let secondBox = document.querySelector('.second');

li.forEach((elm,index) => {
  elm.addEventListener('click',function(event){
     event.target.innerHTML = index + 1
    setTimeout(() => {
      event.target.innerHTML = "";

    },5000);
     
  });
});
  

// With delegation 

secondBox.addEventListener("click",(event) => {
    let text = event.target.dataset.text;
    event.target.innerHTML = text;
    setTimeout(() => {
      event.target.innerHTML = "";

    },5000);
})


