function add(num1: number, num2: number): number {
  return num1 + num2;
}

type BinaryFunc = (a: number, b: number) => number;

let addAnother: BinaryFunc;
addAnother = add;
console.log("Invoke Addanother ", addAnother(20, 30));
