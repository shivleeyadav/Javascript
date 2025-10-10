//operator
//arithmetic

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);
// console.log(5**3);

//assignment operator

// let x = 20;
// let y = 10;
// x = x+y;
// console.log(x);

//comparison operator

// let x=10;
// let y=20;
// console.log(x<y);
// console.log(x===y);    // also check type

// let a = "121";
// let b = Number(a);

// console.log(b);

//number->string

// let a=10;
// let b=String(a);

// console.log(b);

// let a=true;
// console.log(Number(a));

// console.log(Number(null));   //-> 0
// console.log(Number(undefined)); //->Nan -> Not a number

// console.log(Boolean(10));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));

// let a=0.1;
// let b=0.2;
// let c=a+b;
// console.log(c);         //0.30000000000000004 -> on float numbers this problem
// bcoz these numbers are not completely converted in binary this result is approximate

// for correct ans we should consider these input as a string not a number


//acc to ecma script
// console.log(null==undefined); //->true  
// console.log(null===undefined); //->false;
// console.log(null==0);     //->false
// console.log(null=="");    //->false;
// console.log(null==false);  // ->false;
// console.log(null==true);   //->false

// >,<,>=,<= (null ko number me convert kr diya jayega)
// console.log(null>=0);   //->true
// console.log(null<=0);   //->true
// console.log(null>0);    //false;

// console.log("Rohit">"Mohit");   ->true;

// console.log(NaN==NaN);    //->false;

// for(let i=0;i<10;i){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     // i++;
//     console.log(i);
//     i++;
// }
// while(i<10);

//if else

// let age = 15;
// if(age>=18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }

//logical operator

//&& , ||

// console.log(true && true);
// console.log(true && false);
// console.log(false&&false);

 let a = 0;
 let b = 20;
 console.log(a||b);    //&& : if first value is true , it will return the first value itself
//if first value is false ,it will return second

console.log(5!=5);