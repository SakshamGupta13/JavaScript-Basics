// array destructuring

const myArray = ["value1", "value2", "value3" ,"value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("Value if myVar1 is ", myVar1);
// console.log("Value if myVar2 is ", myVar2);

// let myNewArray = myArray.slice(2);
let [myVar1, myVar2, ...myNewArray] = myArray;
console.log("Value of myVar1 is ", myVar1);
console.log("Value of myVar2 is ", myVar2);
console.log( myNewArray);
