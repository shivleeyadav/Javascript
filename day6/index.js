// //Arrays

// // let marks1 = 100;
// // let marks2 = 50;
// // let marks3 = 70;
// // let marks4 = 80;

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);

// let arr = [110,30,'Rohit' , true];
// console.log(arr);

// console.log(arr[0]);
// console.log(typeof arr);  //->object
// // objects are mutable
// arr[1]=90;
// console.log(arr);
// arr.push(90);                   //insert element in last
// console.log(arr);           
// arr.pop();        //delete element from last

// arr.unshift(10);   //insert element in start    ->we dont use this bcoz it shifts the whole array
// arr.shift();        //delete from start

// console.log(arr);

// let arr=[10,20,50,90,11];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr=[10,20,50,90,11];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr);
// console.log(arr2);        //these are copied by reference hence change both arrays

// const arr = [10,20,50,90,11];    //in this we cant do upper thing but

// arr[2] = 10;                        //this can be done bcoz address is not changing
// console.log(arr);

// const arr = [10,20,50,90,11];  

// console.log(arr.slice(2,4));

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit" , 11 , true];

// const arr3 = arr.concat(arr2);
// console.log(arr3);

// const arr = [10,20,50,90,11];  
// const arr2 = arr.splice(1,3);
// console.log(arr);               //jha se jha tak ka delete krna h 
// console.log(arr2);              //jo part trim hua h vo isme aa jata h
//slice -> hum htate isme bhi h but original array me koi change nhi aata
//splice ->isme original array me change aata h

// const arr = [10,20,50,90,11];  
// const arr2 =["Rohit", 11,true];
// // arr.push(arr2);
// // console.log(arr);         //[ 10, 20, 50, 90, 11, [ 'Rohit', 11, true ] ]

// const arr3 = arr.concat(arr2);
// console.log(arr3);          //[ 10, 20, 50, 90, 11, 'Rohit', 11, true ]   ye ek nya array return krke deta h

// const arr3 = [...arr,...arr2];   //spread operator
// console.log(arr3);                  [ 10, 20, 50, 90, 11, 'Rohit', 11, true ]

const names = ["Alice","Bob","Shivlee","Charlie"];
console.log(names.toString());     //convert to string   -> Alice,Bob,Charlie

// console.log(names.join(" "));         ->  Alice Bob Charlie
// console.log(names.indexOf("Bob"));          //gives index
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));

// names.sort();
// names.reverse();
// console.log(names);

// const a= ["101","90","80","32","91"];       //compare on the basis of ascii table
const a = [101,90,80,32,91];
// a.sort();
// console.log(a);

a.sort((a,b)=>a-b);
console.log(a);