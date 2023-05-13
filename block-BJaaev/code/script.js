// custom js 
function main (){
    let input = document.querySelector('.input_box');
    let rootElm = document.querySelector('.list');
    
    let allItems = JSON.parse(localStorage.getItem('todos')) || [];
    
    function handleEvent(event){
         let value = event.target.value;
         if(event.key === 'Enter' && value !== ""){
            let items = {
                name : value,
                isDone :false
            }
            allItems.push(items);
           event.target.value = "";
 
          localStorage.setItem('todos',JSON.stringify(allItems));
              createUI();
             
         }
      
    }
    
       // delete functionality
       function deleteList(event){
       let id = event.target.dataset.id;
       allItems.splice(id,1);
       createUI();
    } 
    
    // CHECKED FUNCTIONALITY
     function handleCheck(event){
       let id = event.target.dataset.id;
    
       allItems[id].isDone = !allItems[id].isDone;
       localStorage.setItem('todos',JSON.stringify(allItems));
       // createUI();
     }
    
    
    function createUI(){
        rootElm.innerHTML = "";
       allItems.forEach((item,index) => {
    
          let li = document.createElement('li');
    
          let checkbox = document.createElement('input');
             checkbox.classList.add('completed');
             checkbox.type = 'checkbox';
             checkbox.checked = item.isDone;
             checkbox.setAttribute('data-id',index);
            checkbox.addEventListener('input',handleCheck);
          let h1 = document.createElement('h1');
           h1.classList.add('tasks');
           h1.innerText = item.name;
          let span = document.createElement('span');
           span.classList.add('deletes');
           span.innerHTML =  '❌';
           span.setAttribute('data-id',index);
      
    
           span.addEventListener('click',deleteList);
    
    
           li.append(checkbox, h1, span);
           rootElm.append(li);
          
           
       })
         
       
    }
    
    createUI();
    
    
    input.addEventListener('keyup', handleEvent);
 }
 
 main();