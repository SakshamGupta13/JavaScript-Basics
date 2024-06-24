// objects refrence types 
// arrays are good but not suuficient 
// object store key value pairs
// object don't have index

// how to create objects
const person = {
    name:"Saksham",
    "lastname":"Gupta", 
    age:18,
    hobbies: ["games", "listening music", "watching movies"]
};
console.log(person);

// how to access data from objects
console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person.hobbies);
console.log(person["lastname"]);

// how to add key value pairs to objects 
// person.gender="male";
person["gender"]="male";
console.log(person);
