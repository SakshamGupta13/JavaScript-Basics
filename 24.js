// spread operator
const array1 = [1,2,3];
const array2 = [4,5,6];

// const newArray = [...array1, ...array2];
const newArray = [..."123456"]
console.log(newArray);                      

// spread opertor in objects
const obj1 = {
    key1:"value1",
    key2:"value2"
};
const obj2 = {
    key1:"valueeee",
    key3:"value4",
    key4:"value4"
};
const newObj = {...obj1, ...obj2};
console.log(newObj);