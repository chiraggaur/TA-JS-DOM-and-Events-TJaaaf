// Create a watch list app that will have an input box
// When you type something and press enter it should be added as a list below input
// Each movie name will have a cross button (to delete the movie)
// When you click on the cross the movie name should be deleted

let input = document.querySelector('.movies_name');
let ul = document.querySelector('ul');

let movies_list = [];

function handleEvent(event){
    if(event.key ==='Enter'){
        
      movies_list.push({name : input.value ,watched : false});
      event.target.value = " ";
      createMovieUi();
     
    }
}

input.addEventListener('keyup',handleEvent);

      // creating UI
      function createMovieUi(){
        ul.innerHTML = " ";
        movies_list.forEach((item,i) => {
         let li = document.createElement('li');
            li.classList.add('list');
         let check = document.createElement('input');
            check.type = "checkbox";
            check.classList.add('type_names');
            check.id = i;
            check.checked = movies_list.watched;
            //change event
            check.addEventListener('change',(event) => {
                let id = event.target.id;
                movies_list[id].watched = !movies_list[id].watched;

                createMovieUi();
            })
         let movie = document.createElement('h2');
            movie.innerText = item.name;
         let remove = document.createElement('span');
         remove.innerText = '❌';
         remove.setAttribute("data-id",i);
             // remove movie
        remove.addEventListener('click',(event)=>{
        // event.target.parentElement.remove();
        let id = event.target.dataset.id;
        movies_list.splice(id, 1);
        createMovieUi();

        });
         li.append(check, movie, remove);
         ul.append(li);

        // checked
        console.log(movies_list);
    
});
     
}
//   createMovieUi();





