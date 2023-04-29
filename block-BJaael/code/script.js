let outerBox = document.querySelector('.masterBox');
function random(){
    let list = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';
    
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*16);
        color = color + list[random];
    }

    return color;
}




outerBox.addEventListener('mousemove',function(){
     outerBox.style.backgroundColor = random();
});

let gridNumber1 = document.querySelector('.number1');
gridNumber1.addEventListener('mousemove',function(){
    let random = Math.floor(Math.random()*500);
    let recurringNumber = random;
    return gridNumber1.innerHTML = recurringNumber ;
})

 let gridNumber2 = document.querySelector('.number2');
 gridNumber2.addEventListener('mousemove',function(){
    let random = Math.floor(Math.random()*500);
    let recurringNumber = random;
    return gridNumber2.innerHTML = recurringNumber ;
})

 let gridNumber3 = document.querySelector('.number3');
 gridNumber3.addEventListener('mousemove',function(){
    let random = Math.floor(Math.random()*500);
    let recurringNumber = random;
    return gridNumber3.innerHTML = recurringNumber ;
})

 let gridNumber4 = document.querySelector('.number4');
 gridNumber4.addEventListener('mousemove',function(){
    let random = Math.floor(Math.random()*500);
    let recurringNumber = random;
    return gridNumber4.innerHTML = recurringNumber ;
})