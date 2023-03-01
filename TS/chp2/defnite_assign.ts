let aValue: number;
// console.log(" The value of unassigned primitve value ", aValue);
// This line will be error cause of not assigning value

let anyValue: any;
console.log("value of unassign any type : ", anyValue);

class Human {
  // name: string; this line error cause of not assigning value
  name: string = "";
}

let globalStr: string;
setGlobalStrValue("Global Str value set");
// console.log(`globalString = ${globalStr ?? ""}`); TS compiler will throw error
function setGlobalStrValue(value: string) {
  globalStr = value;
}
