let boxOne = document.querySelector(".first");
let boxSecond = document.querySelector(".second");

//#fafa11 - consist of random 1 to f 16 characters. 
function randomGenerator(){
 let count = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
 let color = '#';
 for (let i = 0; i < 6; i++){
     let random = Math.floor(Math.random()*16);
      color = color + (count[random]);
 }
   return color;
}
boxOne.addEventListener('click',function(){
    return boxOne.style.backgroundColor = randomGenerator();
})
boxSecond.addEventListener('mousemove',function(){
    return boxSecond.style.backgroundColor = randomGenerator();
})