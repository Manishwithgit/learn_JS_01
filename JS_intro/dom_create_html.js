// console.log('hello again ')

const myptag=document.createElement('p');
myptag.textContent = 'i am a M';
myptag.classList.add('ptag'); // assign a class 
console.log(myptag);




//...................................

const mypic=document.createElement('img');
mypic.src='https://picsum.photos/300';
mypic.alt='do no';

const myDv=document.createElement('div');
myDv.classList.add('mapper');
console.log(myDv);  

// document.body.appendChild(myDv);
myDv.appendChild(myptag);
myDv.appendChild(mypic);



document.body.appendChild(myDv);
 
// add something to the top likea heading!

const heading=document.createElement('h1');
heading.textContent='Cool things';
//  myDv.appendChild(heading);
myDv.insertAdjacentElement('afterbegin',heading);
//afterend beforeend afterbegin beforebegin


// <ul> <li>



const list=document.createElement('ul');
const li=document.createElement('li');
li.textContent='four';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const lie=document.createElement('li');
lie.textContent='seven';
list.append(lie);

const li1=lie.cloneNode(true);
list.insertAdjacentElement('afterbegin',li1);