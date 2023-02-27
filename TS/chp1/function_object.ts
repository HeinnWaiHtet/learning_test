function processObj(obj: { name: string; age: number; school?: string }) {
  console.log("Name ", obj.name);
  console.log("School ", obj.school?.toUpperCase() ?? "No");
}

let obj = {
  name: "HWH",
  age: 21,
};

processObj(obj);
