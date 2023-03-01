// value model
let aa = 10;
let bb = aa;

aa++;
console.log("AA : ", aa, " BB : ", bb);

// reference model
let refObj: any = {
  count: 0,
};

let refObj1 = refObj;
refObj1.count++;
console.log("Ref Obj : ", refObj, " Ref Obj1 ", refObj1);

refObj1 = {
  name: "HWH",
};

console.log("Ref Obj : ", refObj, " Ref Obj1 ", refObj1);
