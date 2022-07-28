const div =document.createElement('div');
// add a class of mapper to it
div.classList.add('mapper');
//put it into the body
document.body.appendChild(div);


// make an unorder list.....
const ul =`<ul>
<li> one </li>
<li> two </li>
<li> three </li>
</ul>`;

// add three list items with the words "one, two three" ....
//put that list into the above wrapper
div.innerHTML=ul;
console.log(div);

// create an image
const img=document.createElement('img');

//set the source to an image
img.src='https://picsum.photos/333';

//set the width to 222
img.width=222;
img.height=333;
//add a class of cute
img.classList.add('cool');
//add an alt of cool man... 
img.alt='cool man!';
//append that image to the mapper
div.appendChild(img);


// with HTML string, make a div, with two paragraphs inside of it...

const myCSS= `
<div class='mdiv'>
   <p> Paragraph One </p>
   <p> Paragraph Two </p>
</div>  `;

const ulelement=div.querySelector('ul');
console.log(ulelement);

// put this div before the unorder list from above
ulelement.insertAdjacentHTML('beforebegin', myCSS);

// add a class to the second paragraph called warning

const meradiv=div.querySelector('.mdiv');
// console.log(meradiv);
meradiv.children[1].classList.add('warning');
 
//remove the first paragraph.........
meradiv.firstElementChild.remove();



// create a funtion called generatePlayerCard that takes in three arguments:name,age, and heights 
 function generatePlayerCard(name, age, height){
    const html=`
    <div class='pcard'>
    <h2> ${name} - ${age}</h2>
    <p> Their height is ${height} and ${age} years old. In cat year this person would be ${age * 7}. that would be tall cat
    
    <button class='delete' type='button'>&times; Delete</button>
    
    
    </p>

   
    
    </div>
    `;
    return html; 
 }


// make a new div with a class of cards

const card=document.createElement('div');
card.classList.add('card');
// Have that funtion make 4 cards

let cardHTML=generatePlayerCard('monk', 22,211);
cardHTML += generatePlayerCard('som', 23,321);
cardHTML +=generatePlayerCard('kali', 11,111);
cardHTML +=generatePlayerCard('bun', 21,122); 
// console.log(cardHTML);
card.innerHTML=cardHTML;
div.insertAdjacentElement('afterbegin', card);



// select all the buttons!

const buttons=document.querySelectorAll('.delete');

//make out delete funtion

function deleteCard(event){
    const btnclicked=event.currentTarget;
     btnclicked .parentElement .remove();
    // btnclicked.closest('.pcard').remove();
}

// loop over them and attach a listener...
buttons.forEach(button=> button.addEventListener('click', deleteCard));