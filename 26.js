// object inside array
// very useful in real world aapplications

const users=[
    {userId:1, firstName:"Saksham", gender:"male"},
    {userId:2, firstName:"Priya", gender:"female"},
    {userId:3, firstName:"Shruti", gender:"female"}
]

console.log(users);
for(let user of users){
    console.log(user);
}