let dataObj = {
  data: 10,
};

let someComplexObject = {
  name: "Something",
  address: "Somewhere",
  country: "MM",
  value: 22,
  dataObj,
};

let another = {
  value: 33,
};

let obj1 = { ...someComplexObject, ...another };
console.log("Obj ", obj1);

obj1.dataObj.data = 200;
console.log("SomeCompex ", someComplexObject);
console.log("DataObj ", dataObj);

let str = JSON.stringify(someComplexObject);
let deepClone = JSON.parse(str);
deepClone.dataObj = "Change";
console.log("SomeCompex ", someComplexObject);
console.log("DataObj ", dataObj);
console.log("DeepClone ", deepClone);
