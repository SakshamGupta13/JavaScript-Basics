// how to iterate object
const person = {
    name:"Saksham",
    age:18,
    hobbies: ["games", "listening music", "watching movies"]
};

// for in loop
// for(let key in person){
//     console.log(person[key]);
// }
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }


// Object.keys
console.log(Object.keys(person));  // this creates an arry

for(let key of Object.keys(person)){
    console.log(person[key]);
}