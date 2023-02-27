function greet(msg) {
    console.log(msg);
}
greet("Hello");
// greet(10);
function add(num1, num2) {
    return num1 + num2;
}
var sum = add(1, 2);
console.log("Sum ", sum);
// sum = 'Hello'; cannot assign other data type cause of type inferencing
var arr = ["a", "b", "c"];
arr.forEach(function (s) { return console.log(s.toUpperCase()); });
