// without event delegation 
 let ul = document.querySelector('.boxes');
for (let i = 1; i <= 12; i++){
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
     li.classList.add('box');
    //  console.log(li);
    li.append(h2);
     ul.append(li);
     li.addEventListener('click',function(){
        // let timeTaken = Math.floor(event.timeStamp);
        // console.log(timeTaken);
         h2.innerText = i;
     })
}


//with delegation

let rl = document.querySelector('.Boxes');


for (let i = 1; i <= 12; i++){
    let li = document.createElement('li');
      li.setAttribute("data-value",i);
    let h2 = document.createElement('h2');
     li.classList.add('box');
    li.append(h2);
     rl.append(li); 
     li.addEventListener('click',handleEvent);
     function handleEvent(event){
        let Number = event.target.dataset.value;
        h2.innerHTML = Number;
    }
     }  
  
