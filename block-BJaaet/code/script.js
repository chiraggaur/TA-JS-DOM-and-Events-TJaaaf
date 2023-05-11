// Create a watch list app that will have an input box
// When you type something and press enter it should be added as a list below input
// Each movie name will have a cross button (to delete the movie)
// When you click on the cross the movie name should be deleted

let form = document.querySelector('.form_control');
let input = document.querySelector('.movie_names')
 let ul = document.querySelector('ul');
form.addEventListener('Enter',handleEvent);


function handleEvent(event){
   event.preventDefault(); 
   if(event.key === 'Enter'){
      let li = document.createElement('li');
    let values = event.target.elements.movie.value;
    li.append(values);
    ul.append(li);
   }
}