// custom js 
function main (){
    let input = document.querySelector('.input_box');
    let rootElm = document.querySelector('.list');
     //buttons

     let all = document.querySelector('.all');
     let clear = document.querySelector('.clear');
     let active = document.querySelector('.active');
     let completed = document.querySelector('.completed');

     let selectedButton = 'all';

    let allItems = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    

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

           localStorage.setItem('todo',JSON.stringify(allItems));

           createUI();
              
             
         }
      
    }

       
    
       // delete functionality
       function deleteList(event){
       let id = event.target.dataset.id;
       allItems.splice(id,1);
       localStorage.setItem('todo',JSON.stringify(allItems));

       createUI();
    } 
    
    // CHECKED FUNCTIONALITY
     function handleCheck(event){
       let id = event.target.dataset.id;
      allItems[id].isDone = !allItems[id].isDone;
      localStorage.setItem('todo',JSON.stringify(allItems));

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
         //   localStorage.setItem('todo',JSON.stringify(allItems));
    
           li.append(checkbox, h1, span);
           rootElm.append(li);
          
           
       })
         
       
    }
    
    createUI();

    //clearCompleted button
    clear.addEventListener('click',() => {
      allItems = allItems.filter((todos) => !todos.isDone);
      selectedButton = 'all';
      pickSelectedButton(selectedButton);
      createUI();
    });

    //completed
    completed.addEventListener('click',() => {
      let completed = allItems.filter((todos) => todos.isDone);
      createUI(completed);
      selectedButton = 'completed';
      pickSelectedButton(selectedButton);
    });

    //active
     active.addEventListener('click',() => {
      let notCompleted = allItems.filter((todos) => !todos.isDone);
      selectedButton = 'active';
      pickSelectedButton(selectedButton);
      createUI(notCompleted);
     })

     //all
     all.addEventListener('click',() => {
      selectedButton = 'all';
      pickSelectedButton(selectedButton);
        createUI();
     })

    all.classList.add('selected');

   function pickSelectedButton(btn){
      all.classList.remove('selected');
      active.classList.remove('selected');
      completed.classList.remove('selected');

      if(btn === 'all'){
         all.classList.add('selected');
      }
      if(btn === 'active'){
         active.classList.add('selected');
      }
      if(btn === 'completed'){
         completed.classList.add('selected');
      }
      if(btn === 'clear'){
         all.classList.add('selected');
      }
   }


    
    input.addEventListener('keyup', handleEvent);
 }
 
 main();