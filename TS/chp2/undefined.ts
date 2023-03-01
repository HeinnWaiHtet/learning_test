let un;
console.log("Un ", un);

let obj: any = {
  name: "HWH",
};
console.log("Obj Undefined ", obj.age);

let arr = [10, 20, 30];
console.log("Arr [0] ", arr[0]);

delete arr[0];
for (let i = 0; i < arr.length; i++) {
  console.log(`Arr[${i}] is ${arr[i]}`);
}

let k = null;

console.log("Type of declare Un ", typeof un);
console.log("Type of K value null ", typeof k);
console.log("Value of K ", k);
