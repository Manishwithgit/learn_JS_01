

//array of object.........

const people =[
    {name:'man', cool:true, country:'canada'},
    {name:'som', cool: false, country:'china'},
    {name:'foo', cool:false, country:'craf'},
];

//loop.............

// people.forEach((person, index)=>{
//      console.groupCollapsed(`${person.name}`);
//     console.group(`${person.name}`); 
//     console.log(person.country);
//     console.log(person.cool);
//     console.log('Done!');
//     console.groupEnd(`${person.name}`);

// });

// console.table(people);


// console methods...............

// function consolestuff(){
//     console.group('do nothing');
//     console.log('hello man');
//     console.warn('watch out');
//     console.error('Missing');
    
// }


function Gino(name){
    console.count('running road');
    return `Dr. ${name}`;
}


// callstack.........................

// breakpoints..................
 
people.forEach((person,index)=>{
    console.log(person.name);
});

//scope.......................  

 //network attribute...........
