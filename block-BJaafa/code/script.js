let coverLists = document.querySelector('.cover');
let nameInput = document.querySelector('.NameField');
let ageInput = document.querySelector('.AgeField');
let submitDetails = document.querySelector('.submit');

let data = [];



// submit function
submitDetails.addEventListener('click',submitData);

function submitData(event){

    // details;
   let dataValues = {};
    dataValues.name = nameInput.value;
    dataValues.age = Number(ageInput.value);
    data.push(dataValues);

    generateBio(data);

}  

 


function  generateBio (Details){
     data = [];
    Details.forEach(elm => {
        let list = document.createElement('ul');
        list.classList.add('outerBox');
      let h2 = document.createElement('h2');
         h2.innerText = elm.name;
      let p = document.createElement('p');
        p.innerText = elm.age;
      let more = document.createElement('button');
        more.innerText = " Know More!";
      list.append(h2, p, more);
      coverLists.append(list);
    });
   
   

}



