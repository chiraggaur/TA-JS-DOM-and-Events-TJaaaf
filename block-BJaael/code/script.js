// create 500 boxes with width and height 4rem 

let outerBox = document.querySelector('.container');
for(let i = 0; i < 500; i++ ){
    let div = document.createElement('div');
    div.classList.add('boxes');
    let h3 = document.createElement('h3');
     h3.innerText = randomNumber(500);
     div.append(h3);
    //  console.log(div);
     outerBox.append(div); 
}

// random color generator

function colorGenerator(){
    let list = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let colorCode = '#';


    for(let i = 0; i < 6; i++){
       random = Math.floor(Math.random() * 16);
        colorCode = colorCode + list[random];
        
    }
     return colorCode;
    // console.log(colorCode);
}
   let innerBox = document.querySelectorAll('.boxes');
   function action(){
    innerBox.forEach((elm) => {
       elm.style.backgroundColor = colorGenerator();
       elm.querySelector('h3').innerText = randomNumber(500);
    });

     
}

  // add event lsitener

  outerBox.addEventListener('mousemove',action);

  //random No

  function randomNumber(max){

    let number = Math.floor(Math.random() * max);

    return number;
 }