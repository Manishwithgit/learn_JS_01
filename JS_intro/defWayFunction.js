// console.log('may be work');

// function inTocm(inches){
//     return inches*2.54;
// }


// const cm= function(inches){
//     return inches  * 2.54;
// };



// const inchToCm=(inches)=> {
//     return inches * 2.54;
// };


// const inTocm=inches=>inches*2.54;


// f(a, ?b) b is optional ........
function add(a,b=5){
    const total=a+b;
    return total;
}


// const add = function(a,b=3){
//     const total=a+b;
//     return total;
// }

 
// const add=(a,b=3) => a+b;

//.........................................


// function makebaby(first, last){
//     const baby={
//         name:`${first} ${last}`,
//         age:0
//     }
//     return baby;
// }



// const makebaby =(first,last)=>{
//     const baby={
//         name:`${first} ${last}`,
//         age:0
//     }
//     return baby;
// }


// const makebaby=(first, last)=>({name:`${first} ${last}`, age:0});


// immediately invoked funtion expression...
// (function(age){
//     console.log('running the anon function');
//     return `You are cool and age ${age}`;
       
// })(10);

// methods
 const moon={
   name:'manish',
   //method moon.sayHi..... !
   sayHi:function(){
    console.log('do nothing');
    return 'Hey man';
   },
    //  // short hand method

    //  yoHi:function(){
    //     console.log('hello man');
    //  }
     yoHi(){
        console.log('hello man');
     },
     // arrow function

     mok:()=>{
        console.log('he is smart ');
     }

 }


 //callbackfuntions....

 //click call back

 const Tab = document.querySelector('.click');
//  console.log(Tab);

//  Tab.addEventListener('click', moon.yoHi);
  
function handleclick(){
    console.log("let click!!");
}
Tab.addEventListener('click',handleclick);


 // timer callback..........

//  setTimeout(moon.sayHi, 2000);

setTimeout(function(){
    console.log('OKAY! Time out');
}, 2000);  

setTimeout(()=>{
    console.log('Done! ')
}, 1000); 
