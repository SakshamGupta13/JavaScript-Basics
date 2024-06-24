// nested destructuring
const users=[
    {userId:1, firstName:"Saksham", gender:"male"},
    {userId:2, firstName:"Priya", gender:"female"},
    {userId:3, firstName:"Shruti", gender:"female"}
]

// const [user1, user2, user3]=users;
// console.log(user1);

const [{firstName:user1Name, userId}, , {gender}] = users;
console.log(user1Name);
console.log(userId);
console.log(gender);