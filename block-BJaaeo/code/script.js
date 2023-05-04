//numberic buttons

let numerics = document.querySelector('.wrapper');
 let inputField = document.querySelector('.textField');
//   console.log(inputField);
numerics.addEventListener('click',handleEvent);

function handleEvent(event){
    let pressedButton = event.target.dataset.text;
     if(pressedButton === "="){
        inputField.value = eval(inputField.value);
     } 
      else if(pressedButton == "+"){
        inputField.value = inputField.value + "+";
     } 
      else if(pressedButton == "-"){
        inputField.value = inputField.value + "-";
     }
      else if(pressedButton == "*"){
        inputField.value = inputField.value + "*";
     }
      else if(pressedButton == "%"){
        inputField.value = inputField.value + "%";
     } else if(pressedButton == "c"){
        inputField.value = "";
     } else {
        inputField.value = inputField.value + pressedButton;
        console.log(inputField.value);
     }
    
}

