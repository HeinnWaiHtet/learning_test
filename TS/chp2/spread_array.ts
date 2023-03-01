let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
let [firstIem, ...secondItem] = thirdArray;

console.log("Third array ", thirdArray);
console.log("FirstItem ", firstIem, " Remaining ", secondItem);

function getSomething(): Array<any> {
  return [10, 20];
}

let [a1, a2] = getSomething();
console.log("A1 ", a1, " A2 ", a2);
