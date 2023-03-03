class Param {
  // no need to initialize instance members
  constructor(public a: number, public readonly b: number, private c: number) {}
}

let param: Param;
param = new Param(1, 2, 3);
console.log("Param ", param);
console.log(param.a, param.b);
