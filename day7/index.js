//object
//key value
// const user = {
//     name:"Rohit",
//     age:20,
//     emailId :"negi@",
//     amount:3400,
//     "home address": "dwarka"
// }

//console.log(typeof user);
//CRUD opeartion : create read update delete

// console.log(user.age);
// //insert
// user.adhar =1234;
// console.log(user);
// //update
// user.amount = 5000;
// console.log(user);

// //delete
// delete user.emailId;
// console.log(user);

// console.log(user["name"]);
// console.log(user.age);

// const user = {
//     name:"Rohit",
//     age:20,
//     emailId :"negi@",
//     amount:3400,
//     "home address": "dwarka"
// }

// const user2 = user;
// user2.age = 90;
// console.log(user);      //user2 and user points the same object chamge in one obj will lead to change in another object also

// console.log(Object.keys(user));     //saari keys ko print kr dega
// console.log(Object.values(user));       //saari values ko de dega in form of array

// console.log(Object.entries(user));      //both key value ko array ki form me write krke dega

// [
//     [ 'name', 'Rohit' ],
//     [ 'age', 20 ],
//     [ 'emailId', 'negi@' ],
//     [ 'amount', 3400 ],
//     [ 'home address', 'dwarka' ]
//   ]                                          //👈🏻aise dega

//loop on object
// for(let num in user){
//     console.log(num);                           //print keys
// }
// for(let num in user){
//     console.log(user[num]);                     //print values and we can print both at same time like console.log(num,user[num]);
// }

// const user = {
//     name:"Rohit",
//     age:20,
//     emailId :"negi@",
//     amount:3400,
//     "home address": "dwarka"
// }
// const name = user.name;
// const age = user.age;

// const {name,age} = user;

// console.log(name,age); 

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let keys of Object.entries(user)){
//     console.log(keys);
// }

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

// const user = {
//     name:"Rohit",
//     age:20,
//     emailId :"negi@",
//     amount:3400,
//     "home address": "dwarka",
//     greeting: function(){
//         console.log(`Shivle is very beautiful ${this.name}`);
//         return 20;
//     }
// }
// const va = user.greeting();
// console.log(va);

//nested object

// const user = {
//     name:"Rohit",
//     age:20,
//     emailId :"negi@",
//     amount:3400,
//     address: {
//         city:"Rewari",
//         state:"HR"
//     }
// }

// console.log(user);

//shallow copy
// const user2 = {...user};         //copy create krega user ki 
// user2.address.city = "Dwarka";      //create independent copy at a single level 

// console.log(user2);
// console.log(user);

//deep copy
// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";          //create independent copy at all levels

// console.log(user2);
// console.log(user);

//key ->string || symbol
const sym = Symbol("id");
const user = {
        name:"Rohit",
        age:20,
        0:100,
        2:"Mohan",
        [sym] : "Hello ji"
    }

console.log(user["0"]);

console.log(user[sym]); 
