// object destructing
const item={
    color:"red",
    pen:"gel",
    clothes:"cotton",
    year:2000
};

let {color, pen, ...restItem}=item;
console.log(color);
console.log(pen);
console.log(restItem);