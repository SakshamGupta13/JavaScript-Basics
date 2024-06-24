// primitive vs refrence data types

// primitive types  --> copy of variables is created with different addresses
let num1=6;
let num2=num1; 
console.log(num1); 
console.log(num2);
num1++;
console.log("After Incrementing num1 : "); 
console.log(num1); 
console.log(num2);


// refrence types  -->  copy of variables is created with same addresses
// arrray is refrence type
let array1=["item1", "item2"];
let array2=array1;
console.log("array1 : ", array1);
console.log("array2 : ", array2);
