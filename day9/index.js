//when code runs --> execution context is created
//1.Memory allocation
//2.Execution Phase

//firstly memory is allocated to variables that is undefined

//let const
//memory allocation
//a = <uninitialized> (temporal dead zone)
//b = <uninitialized> (temporal dead zone)
//execution phase
//a=10;
//b =20

// console.log(a);    //gives error bcoz we are accessing a before initialization but in case of var it is initialize with undefined
let a = 10;
const b = 20;

console.log(a);