//  trim()
//  toUpperCase()
//  toLowerCase()
//  slice  

let firstName = "     saksham     ";
console.log(firstName);
console.log(firstName.length);

firstName = firstName.trim();  // removes whitespaces
console.log(firstName);
console.log(firstName.length);

firstName=firstName.toUpperCase();   // convert string to uppercase
console.log(firstName);

firstName=firstName.toLowerCase();   // convert string to lowercase
console.log(firstName);

let name1="mayank";
let newString = name1.slice(0,5)  //  mayan    ignores index no.5(0<=4)
console.log(newString);

newString = name1.slice(1)  //  intex 1 to last index no.
console.log(newString);