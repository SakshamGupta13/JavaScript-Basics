// undefined
// null

let firstName;
console.log(typeof firstName);   // undefined
firstName="saksham";
console.log(typeof firstName);

let myVariable=null;
console.log(myVariable);    // null
myVariable="saksham";
console.log(myVariable, typeof myVariable);

console.log(typeof null);  // bug,error


// big int

let myNumber= BigInt(20);
let myNewNumber= 12n;
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ myNewNumber);