// for of loop in array
const fruits = ["apple", "mango", "apple", "grapes"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);



// for in loop in array

for(let index in fruits){
    console.log(index);
}
for(let index in fruits){
    console.log(fruits[index]);
}

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);