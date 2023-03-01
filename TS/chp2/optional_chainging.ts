let objectA: any = {
  nestedProperty: {
    name: "nestedPropertyName",
  },
  missing: {
    name: "Missing name",
  },
};

console.log(objectA.nestedProperty.name);
console.log(objectA?.missing.name);
