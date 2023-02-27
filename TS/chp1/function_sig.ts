function greet(msg: string) {
  console.log(msg);
}

greet("Hello");
// greet(10);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

let sum = add(1, 2);
console.log("Sum ", sum);
// sum = 'Hello'; cannot assign other data type cause of type inferencing

let arr = ["a", "b", "c"];

arr.forEach((s) => console.log(s.toUpperCase()));
