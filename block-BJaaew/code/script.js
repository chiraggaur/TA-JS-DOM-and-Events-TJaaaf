let rootElm = document.querySelector('.portions');


// creating UI

got.houses.map((creatingUI) => {
let ul = document.createElement('ul');
 ul.classList.add('rootElm');
let li = document.createElement('li');
li .classList.add('list');
let image = document.createElement('img');
image.classList.add('profile_Image')
let h1 = document.createElement('h1');
h1.classList.add('name')
let p = document.createElement('p');
p.classList.add('about');
let button = document.createElement('button');
 button.classList.add('know_More')

image.src = got.houses[0].people[0].image;

// console.log(creatingUI.people.filter((details) => {
//        details.name;
// }));

let names  = creatingUI.people.filter((values) => {
       values.name ;
});

h1.innerHTML = names.filter((details) => details.image);

function peopleNameOfAllHouses() {
    // your code goes here
    //  function names(acc,house){
    //     acc[house.name] =  house.people.map((p) => p.name);
    //     return acc;
    //  }
    // return got.houses.reduce(names,{});
  }

p.innerText = got.houses[0].people[0].description;

button.innerText = "KNOW MORE!";

 // appending 

//  li.append(image, h1, p, button);
 ul.append(li ,image, h1, p, button);
rootElm.append(ul);
});


// let test = got.houses.map((list) => {
//     list.people.filter((details) => {
//       console.log(details.name);
//     });
// })









