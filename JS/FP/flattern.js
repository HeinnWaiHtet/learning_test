let arr = [1, 2, 3, 4];
let result = arr.map((x) => [x, x * x]);
let result1 = arr.flatMap((x) => [x, x * x]);

console.log("Map ", result);
/* Output
0 : [1, 1]
1 : [2, 4]
2 : [3, 9]
3 : [4, 16]
*/
console.log("Flat Map ", result1);
// Output [1, 1, 2, 4, 3, 9, 4, 16]
