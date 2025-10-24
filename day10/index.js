// //Scope and closure , HOF(higher order function)
// //global scope
// //functional scope
// //block level scope
// let a = 10;
// const b =20;
// //a and b can be accessed by anyone becoz it has global scope
// if(true){                   //block level
//     console.log(b);
// }

// function greet(){
//     let c= 30;          //functional block
// console.log(a);
// console.log(c);     //c can not be accessed outside the function
// }
// greet();

// //var respects functional and global but not block level

// let global = 30;
// function greet(){
//     let global=40;         //it is valid
//     console.log(global);    //gives output 40  ..if 40 vala is not present it give 30
// }
// greet();

// function createCounter(){
//     let count=0;
//     function increment(){
//         // console.log("I am increment function");
//         count++;
//         return count;
//     }
//     // increment();
//     return increment;
// }
// // createCounter();
// // console.log(count);        //this will give error bcoz count is not defined outside
// const counter = createCounter();
// console.log(counter());       //but this will work bcoz of closure

function createBankAcc(){
    let balance =500;

    const user = {
        deposit : function(amount){
            if(typeof amount === "number" && amount>0){
                balance+=amount;
                return balance;
            }
        },
        withdraw : function(amount){
            if(typeof amount === "number" && amount>0 && balance>=amount){
                balance-=amount;
                return balance;
            }
        },
        getBalance : function(){
            return balance;
        }
    }
    return user;
}

const customer = createBankAcc();
console.log(customer.getBalance());
console.log(customer.deposit(300));
console.log(customer.deposit(200));