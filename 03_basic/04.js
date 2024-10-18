const User = {
    userName: "ROKON",
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.userName} , welcome to the site`);
        console.log(this);
    }
}

// User.welcomeMassage();
// User.userName = "rokon";
// User.welcomeMassage();
// console.log(this);

function chai(){
    let userName = "ROKON";
    console.log(this.userName);   
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// const addTwo = (num1, num2) =>  num1+num2;
//const addTwo = (num1, num2) =>  (num1+num2);
const addTwo = (num1, num2) =>  ({username: "Rokon"});

console.log(addTwo(5,6));



//git remote add origin https://github.com/rokon156/JS-chai.git