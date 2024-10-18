const mySym = Symbol("key1")
const user = {
    name: "ROKON",
    "full name" : "Md Rokonuzzaman",
    [mySym]: "Hello",
    age: 22,
    location: "RAJSHAHI",
    email: "rokon@google.com",
    isLoggedin: false,
    lastLogingDays: ["Monday", "Saturday"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.email= "rokon@chatgpt.com";
// console.log(user.email);
// Object.freeze(user);
// user.email = "rokon@microsoft.com";
// console.log(user.email);
// console.log(user);


user.greeting = function(){
    console.log("Hello JS User"); 
}

user.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greetingTwo());





