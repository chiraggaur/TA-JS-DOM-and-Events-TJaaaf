
let i = document.querySelectorAll('.fa ');
 let result = document.querySelector('.result');
i.forEach((elm) => {
    elm.addEventListener('click',handleClick);

    function handleClick(event){

       let playerValue = event.target.dataset.text;
       let computerValue = event.target.dataset.auto;
    //    console.log(computerValue);
       if(playerValue =="Scissors" && computerValue == "Paper") { 
          console.log("done");
       }
}
});