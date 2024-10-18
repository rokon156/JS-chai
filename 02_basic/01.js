const myNum = [1,2 ,3, 4, 5, 6, 7]

//console.log(myNum[1]);

// myNum.push(8);
// myNum.push(9);
// console.log(myNum);
// myNum.pop();
// myNum.pop();
// myNum.unshift(5);
// myNum.shift();
// console.log(myNum.includes(5));
// console.log(myNum.indexOf(5));

// const newArr = myNum.join();
// console.log(newArr);
// console.log(typeof(newArr));

const myn1 = myNum.slice(1,3);

console.log("A", myNum);
console.log(myn1);
console.log("B", myNum);

const myn2 = myNum.splice(1,3);

console.log("splice ",myn2);
console.log(myNum);




