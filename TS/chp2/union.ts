let a: string | number = "Hello";
a = 23;
console.log("data ", data);

function unionDemo(value: string | number) {
  if (typeof value === "string") {
    console.log("Upper To Data ", value.toUpperCase());
  } else {
    console.log("Double Number ", value * value);
  }
}

unionDemo("welcome from typescript");
unionDemo(2);
