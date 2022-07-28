// function init (){

// const p = document.querySelector('p') 
//  console.log(p); 
// }

// document.addEventListener('DOMContentLoaded', init); 


// const p= document.querySelector('p');
// const divs= document.querySelectorAll('div');
// console.log(p);
// console.log(divs);
   
//...............................
const heading=document.querySelector('h2');
console.log(heading); 

// const pg=document.querySelector('p');
// console.log(pg)

console.log(heading.textContent);

// set the textcontent property on that element .....
heading.textContent='moon is night man';
console.log(heading.textContent);

//....................
console.dir(heading)
//..........................
console.log(heading .innerText);

//....................
const pizzalist = document.querySelector('.piza');
console.log(pizzalist .textContent);

// pizzalist.insertAdjacentText('afterend','🍕');
pizzalist.insertAdjacentText('afterbegin','🍕');
pizzalist.insertAdjacentText('beforeend','🍕');
pizzalist.insertAdjacentText('beforebegin','🍕');


//......................................................

//Working with classes..........

const pic=document.querySelector('.Dclass');
pic.classList.add('open');
pic.classList.remove('okay');
// pic.classList.add('okay') // border-radious change
pic.classList.toggle('okay');
console.log(pic .classList)

function toggleround(){
    pic.classList.toggle('okay');

}

pic.addEventListener('click', toggleround);


pic.alt='moon knight'; //setter
console.log(pic.alt);  //getter
console.log(pic.naturalWidth); //getter  

const com = document.querySelector('.vi');
console.log(com .dataset)