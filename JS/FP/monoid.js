let adderMonoid = {
  binaryOperation: (x, y) => x + y,
  neutralEle: 0,
};

let multiplyMonoid = {
  binaryOperation: (x, y) => x * y,
  neutralEle: 1,
};

let arr = [1, 2, 3, 4, 5];
let total = arr.reduce(adderMonoid.binaryOperation, adderMonoid.neutralEle);
console.log("Total : ", total);

let multiply = arr.reduce(
  multiplyMonoid.binaryOperation,
  multiplyMonoid.neutralEle
);
console.log("Multiply : ", multiply);
