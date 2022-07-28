// console.log('hello');

// const shop=document.querySelectorAll('button.buybtn');

// function btnclick(){
//     console.log('out of stock...');
// }

// shop.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });

//.........................................

// const shopy=document.querySelectorAll('button.buybtn');

// function btnclick(event){
//     console.log('out of stock...');
//     console.log(event);
// }

// shopy.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });

//.......................................

// const shop=document.querySelectorAll('button.buybtn');

// function btnclick(event){
//     console.log('out of stock...');
//     console.log(event.target)
// }

// shop.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });

//..............................data-* global atribute.............

// const shop=document.querySelectorAll('button.buybtn');

// function btnclick(event){
//     console.log('out of stock...');
//     console.log(event.target.dataset)
// }
// shop.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });


//...........................

 // const shopy=document.querySelectorAll('button.buybtn');

// function btnclick(event){
//     console.log('out of stock...');
//     console.log(event.target.dataset.price)
// }

// shopy.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });


//...........textContent........parseFloat...................

// const shop=document.querySelectorAll('button.buybtn');

// function btnclick(event){
//     console.log('out of stock...');
//     const button=event.target;
//     console.log(button.textContent);
//     console.log(parseFloat(event.target.dataset.price));
// }

// shop.forEach(function(shopbtn){
//     shopbtn.addEventListener('click', btnclick);
// });

//.....................bubbling.................

const shop=document.querySelectorAll('button.buybtn');

function btnclick(event){
    const button=event.target;
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

    //stop this event from bubbling up
    event.stopPropagation();
}

shop.forEach(function(shopbtn){
    shopbtn.addEventListener('click', btnclick);
});

window.addEventListener('click', function(event){
    console.log('you check the window')
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();

},

{capture:true}
);


//.......................For...image..mousemove & mouseenter..........

const photoM=document.querySelector('.moon')
photoM .addEventListener('mouseenter',function(evnt){
    console.log(evnt.currentTarget);
    // console.count(evnt .currentTarget)
    console.log(this);
}); 