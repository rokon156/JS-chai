function calculateCartNumber(...num1){
    return num1;
}
//console.log(calculateCartNumber(1,2,3,4,5,6,7,8,9,0,11));

function print(anyObject){
    console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`);
    
}

const User = {
    name: "rokon",
    price: 999
}

print(User);
print({
    name: "test",
    price: 100
})

const myArray = [1,2,3,4,5,6,7,8,9];

function printArray(newArray){
    return newArray[4];
}

console.log(printArray(myArray));
console.log(printArray([10,20,30,40,50,60]));
