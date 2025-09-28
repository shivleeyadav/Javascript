//primitive data types -> numbers,string,boolean,undefined,null,bigint,symbol

//8 byte -> 2^53-1 - -2^53

//number
let a=10;
let b=2.36;
console.log(a,b);
console.log(typeof b);

//string
let c = "strike is coming";
let d = "Anjali";
console.log(c,d);

//boolean
let login =true;
console.log(login);

//undefined
let user;               //cant done with const
console.log(user);

//bigint
let num = 83829475402193484490n;
console.log(num);

//null
let weather = null;
console.log(weather);      //type->object

//symbol
const id1 = Symbol("id");
console.log(id1);

//non primitive data types->array,objects,functions

//array
let arr = [10,20,11,"Shivlee",true];     //type->object
console.log(arr);

//object
let obj = {                                  //type->object
    name:"Shivlee",
    account:123123,
    age:18,
    category:"gen"
}
console.log(obj);

//functions                                      //type->object
let s = function add(){
    console.log("Hello");
}
// add();
console.log(s);
console.log(s());

//primitive data type are immutable but non primitive are mutable;

let arr1 = [10,20,30,40];
arr1.push(90);
arr1[0]=70;
console.log(arr1);

