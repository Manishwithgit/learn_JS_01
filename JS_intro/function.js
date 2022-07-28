// const p=document.querySelector('p');
// console.log(p);

//...........................

// this is  function defination....
function calbill(){

    //this is a function body
    console.log('run run calbill');
    
    const ans=100 * .41;
    // console.log(ans);
    return ans; 
}

// this is a function call or run.....
const myans = calbill(); 

// console.log(`your total is ${myans}`);

console.log(`your tatal is ${calbill()}`); 


// ............................................

function calculate(Bill, Tax ){

    console.log('your bill ');
    const Ans=Bill*(2+Tax);
    return Ans;

}

const myAns=calculate(77, 0.32);
const myAns2=calculate(75, 0.32); 
console.log(myAns, myAns2);



//funtion definition.......
function sayHi (firstName){
    return `hello ${firstName}`;
}

const meet=sayHi('manish');
console.log(meet);

const my23ans=calculate(22+.2, 2);

// .........................

function doct(name){
    return `Dr.${name}`;

}

//silly word is for default value
function yes(name='silly'){
    return `ABC ${name.toUpperCase()}`;
}