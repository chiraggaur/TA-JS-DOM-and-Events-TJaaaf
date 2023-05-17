// custom js 
function main (){
    let input = document.querySelector('.input_box');
    let rootElm = document.querySelector('.list');

    let all = document.querySelector('.All');
    let clearCompleted = document.querySelector('.Clear');
    let active = document.querySelector('.Active');
    let  Completed= document.querySelector('.Completed');

    let activeButton = "all";
    
    let allItems = [];
    // JSON.parse(localStorage.getItem('todo'))
    
    all.addEventListener('click',selectedAll);
     // selected All
    function selectedAll(){
        // allItems = allItems.isDone;
        // all.classList.add('selected');
        // selectedButton();
        selectedButton(activeButton);
        createUI();
    }

    // clear Completed
     
    clearCompleted.addEventListener('click',completedTodos);

    function completedTodos(){
        activeButton ='completed';
        allItems = allItems.filter((todos) => {
            return !todos.isDone;
        });
        console.log(allItems);
        selectedButton(activeButton);
        createUI();
    }

    //completed
    
    Completed.addEventListener('click',completedTodos);

    function completedTodos(){
        activeButton ='clear';
        allItems = allItems.filter((todos) => {
            return todos.isDone;
        });
        selectedButton(activeButton);
        createUI();
    }

    // button selection 


    function selectedButton(btn){
     all.classList.remove('selected');
     clearCompleted .classList.remove('selected');
     active.classList.remove('selected');
     Completed.classList.remove('selected');
     if(btn === 'clear'){
        clearCompleted.classList.add('selected');
     }
     if(btn === 'completed'){
        Completed.classList.add('selected');
     }
     if(btn === 'active'){
        active.classList.add('selected');
     }
     
    }
    // selectedButton(activeButton);
    // selectedButton(activeButton);

    function handleEvent(event){
         let value = event.target.value;
         if(event.key === 'Enter' && value !== ""){
            let items = {
                name : value,
                isDone :false
            }
            allItems.push(items);
            // console.log(allItems);
           event.target.value = "";

        //    localStorage.setItem('todo',JSON.stringify(allItems));

           createUI();
              
             
         }
      
    }

       
    
       // delete functionality
       function deleteList(event){
       let id = event.target.dataset.id;
       allItems.splice(id,1);
    //    localStorage.setItem('todo',JSON.stringify(allItems));

       createUI();
    } 
    
    // CHECKED FUNCTIONALITY
     function handleCheck(event){
       let id = event.target.dataset.id;
      allItems[id].isDone = !allItems[id].isDone;
    //   localStorage.setItem('todo',JSON.stringify(allItems));

       createUI();
     }
    
    
    function createUI(data = allItems){
        rootElm.innerHTML = "";
       data.forEach((item,index) => {
    
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
        //    localStorage.setItem('todo',JSON.stringify(allItems));
    
           li.append(checkbox, h1, span);
           rootElm.append(li);
          
           
       })
         
       
    }
    
    createUI();
    
    
    input.addEventListener('keyup', handleEvent);
 }
 
 main();