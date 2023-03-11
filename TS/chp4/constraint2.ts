function getProperty<Type, Key extends keyof Type>(
  obj: Type,
  key: Key
): Type[Key] {
  return obj[key];
}

let obj = {
  name: "HWH",
  age: 26,
  school: "Monywa",
};
console.log(getProperty(obj, "name"));
// console.log(getProperty(obj, 'isMarried')); throw error calling not have property
