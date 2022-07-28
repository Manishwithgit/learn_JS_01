// console.log('learning')


// const butn=document.querySelector('.btn');
// butn.addEventListener('click',function(){
//     console.log('get clicked')
// }); 


const butn=document.querySelector('.btn');
const botn=document.querySelector('.btn-2');

function handClick(){
    console.log('Game over!!');
}

butn.addEventListener('click', handClick);
botn.addEventListener('click', handClick);

// butn.removeEventListener('click', handleClick);

const horay =()=> console.log('horay!');

butn.addEventListener('click', function(){
    console.log('im an orange');

});

botn.addEventListener('click', horay);
butn.removeEventListener('click', handClick);



// ...................................
// listen on multiple items.........

const shopbtn=document.querySelectorAll('button.shop'); 

function shopitem(){
    console.log('out of stock');
}
shopbtn.forEach(function(buy){
    console.log('binding the button');
    buy.addEventListener('click',shopitem);
})