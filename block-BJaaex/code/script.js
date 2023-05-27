//creating cards

let rootCardContainer = document.querySelector('.cardsContainer');




// loop

function grid(){
   for( let i = 0; i <= 15; i++){
    let li = document.createElement('li');
     li.classList.add('innerCards');     
    // rootCardContainer.append(li);
        li.addEventListener('click', flipOnClick);
        function flipOnClick(event){
        let image = document.createElement('img');
        image.src = 'logo.svg';
        image.classList.add('innerImage');
      //   image.width = '100px';
      //   image.height = '100px'; 
        li.append(image);
        
        }
        flipOnClick();
        rootCardContainer.append(li);
   }
   
}
 grid();


// random selection

// let number = Math.floor (Math.random() * 15);
// console.log(number);



// concept

    

      

  



