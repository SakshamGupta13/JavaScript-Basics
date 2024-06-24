// difference b/w dot and bracket notation
const key = "email";
const person = {
    name:"harshit",
    age:18,
    "person hobbies":["games", "tv"]
};

console.log(person["person hobbies"]);

person[key] = "sakshamgupta@gmail.com";
console.log(person);