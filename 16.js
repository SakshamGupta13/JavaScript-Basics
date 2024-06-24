// how to clone array

let array1 = ["item1", "item2"];

// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
let array2 = [...array1];  //  spread operator

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);



// how to concatenate two arrays

// let array3 = array1.slice(0).concat(["item3", "item4"]);
// let array3 = [].concat(array1,["item3", "item4"]);
// let array3 = [...array1, "array3", "array4"];  //  spread operator
let array4 = ["item4", "item5"];
let array3 = [...array1, ...array4];
console.log(array1);
console.log(array3);