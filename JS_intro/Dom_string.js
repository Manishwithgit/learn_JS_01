console.log('morning');

const item=document.querySelector('.item');

const width=500;
const src =`https://picsum.photos/${width}`;

const deo=`let me <h1>LOREM AGAIN </h1>`;

// const deo=`let me <h1> <style>*{display:none}LOREM AGAIN </h1>`;

const myHTML=`
    <div class="wrapper">
    <h2> so${deo}</h2>
    <img src="${src}" alt="${deo}"/>
    </div>
`;


// item .innerHTML=`<h1> manish kumar..?</h1>`;
// console.log(item.innerHTML);

// Turn a string into a DOM element

const myFragment = document.createRange()
.createContextualFragment(myHTML);

// console.log(myFragment); 
document.body.appendChild(myFragment);