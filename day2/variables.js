let name = "Shivlee";
let age = 20;               //can be changed

console.log(name,age);

age =30;
console.log(name,age);

const account = 1234;      // cant be changed
// account=23;

console.log(account);

var a = 10;             // it can also be changed and it can be initialized any no of time but not with let.
a=20;
console.log(a);

if(true){
    var a=20;           // it can be accessed outside 
}                          // it respects only functional and global scope
console.log(a);

