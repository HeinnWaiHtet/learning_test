interface StrArray {
  [index: number]: string | number;
}

let strArray: StrArray = [10, "hello", "world"];
console.log(strArray[1], strArray);

const nonNum = "0";
const secondItem = strArray[nonNum];
console.log("Second item ", secondItem);
