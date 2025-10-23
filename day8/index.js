//function

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 10;
// }
// function addNumber(num1,num2){
//     const sum = num1+num2;
//     console.log(sum);
// }
// greeting();
// addNumber(3,4);
// addNumber(6,7);

// console.log(greeting);      //[Function: greeting]
// console.log(greeting());     //Hello Coder Army, Strike is coming on 18 october

//rest operator

// function addNumber(...num){
//     // console.log(num);               //this function creates an array and put that elements in that array
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(6,7,8,9,10);

// const arr = [10,20,30,40,50];
// const [first,second,...num] = arr;
// console.log(first,second,num);      //print first and second element

//function : expression

// const add = function(num1,num2){
//     return num1+num2;
// }

// console.log(add(3,4));

//arrow function

// const addNumber = () =>{
//     console.log("hello");
// }
// addNumber();
// const addNumber = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addNumber(3,4));

//IIFE   ->immediately invoked function

// (function greeting(){
//     console.log("Hello");
// } )  (); 

// function greet(){
//     console.log("I am goin");
// }
// function meet(callback){
//     console.log("Hello");
//     callback();
// }
// meet(greet);

// function zomatoorderplaced(){
//     console.log("We have started"); 
// }

// function payment(amount){
//     console.log(`${amount} payment has initialized`);
//     console.log("Payment is recieved");
//     zomatoorderplaced();
// }
// payment(500);