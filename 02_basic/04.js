const tinderUser = new Object();


tinderUser.id = "123";
tinderUser.name = "rokon";
tinderUser.loggedIn=false;

//console.log(tinderUser);

const regularUser = {
    fullname: {
        Userfullname: {
            firstname: "ROKON",
            lastname: "ZZAMAN"
        }
    }
}

//console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "c"};
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    }
];


// console.log(user[1].id);
// console.log(user[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));



