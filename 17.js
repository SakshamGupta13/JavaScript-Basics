// for loop in array

let fruits = ["apple", "grapes", "mango", "banana"];

for(let i=0 ; i < fruits.length ; i++){
    console.log(fruits[i].toUpperCase());
}

let fruits2 = [];
for(let i=0 ; i < fruits.length ; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);


 
// using const for creating array

const items = ["item1", "item2"];
// items = ["manyItems"];    // we can not assign value to constant variable
items.push("item3");      // but we can do push, pop, concat, slice in constant variable
console.log(items);