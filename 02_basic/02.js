const myArr = ["A", "B", "C", "D"];
const newArr = ["D", "E", "F"];
//myArr.push(newArr)
const na = myArr.concat(newArr);
//myArr=myArr.concat(newArr);
//console.log(na);
const anh = [...myArr, ...newArr];
//console.log(anh);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
//console.log(anotherArray.flat(2));

// console.log(Array.isArray("ROKON"));
// console.log(Array.from("ROKON"));
// console.log(Array.isArray("ROKON"));
// console.log(Array.from({name:("ROKON","ROSNI")}));

let sc1 =1;
let sc2 =2;
let sc3 =3;

console.log(Array.of(sc1,sc2,sc3));

