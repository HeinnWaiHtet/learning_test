let tuple1: [string, number];
tuple1 = ["hello", 21];

console.log("Tuple1 ", tuple1[0], " 1 ", tuple1[1]);
tuple1[0] = "Change";
console.log("Tuple1 ", tuple1[0], " 1 ", tuple1[1]);

let [my_name, age] = tuple1;
console.log("MyName ", my_name, "  Age ", age);

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];

console.log("tuple optional ", tupleOptional);
