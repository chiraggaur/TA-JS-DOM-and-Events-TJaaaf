let rootCards = document.querySelector('.rootCards');
let rootFilter = document.querySelector('.rootFilter');

//select all peoples array from data

let allPeoples = got.houses.reduce((acc,cv) => {
  acc = acc.concat(cv.people);
  return acc;
},[]);

//creating Filters

let activeTag = "";

let allTags = got.houses.map((house) => {
  return house.name;
})

function createtags(tags =[]){
  rootFilter.innerHTML = "";
   tags.forEach((tag) => {
      let li = document.createElement('button');
       li.classList.add('filterButtons');
       li.innerText = tag;
       if(activeTag === tag){
        li.classList.add('active');
      }
       li.addEventListener('click',() => 
       {
        activeTag = tag;

        let peopleHouse = got.houses.find((house) => house.name === tag).people || [];
         creatingCards(peopleHouse);
         createtags(allTags);
       });
        
       rootFilter.append(li);
   });
   
};

createtags(allTags);

// filter with buttons on click



//create cardsUI 

function creatingCards (data = []){
   rootCards.innerHTML = "";
   data.forEach((house) => {
     let li = document.createElement('li');
     li.classList.add('list');
     let image = document.createElement('img');
     image.classList.add('profile');
     image.src = house.image;
     let h1 = document.createElement('h1');
     h1.classList.add('name');
     h1.innerText = house.name; 
     let p = document.createElement('p');
     p.classList.add('description');
     p.innerText = house.description; 
     let knowMore = document.createElement('button');
     knowMore.classList.add('info');
     knowMore.innerText = 'Know More!'
     li.append(image, h1, p, knowMore);
     rootCards.append(li);
   })
}

creatingCards(allPeoples);

//input search logic

let search = document.querySelector('.searchPeoples');

search.addEventListener('keyup',handleSearch);

function handleSearch(event){
  if(event.keyCode === 13 ){
    let value = event.target.value;
   let searchText =  allPeoples.filter((houses) => houses.name.toLowerCase().includes(value.toLowerCase())); //doubt 
   creatingCards(searchText);
  }

}