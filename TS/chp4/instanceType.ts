class C {
  x = 10;
  y = 20;
}

type TypeC = InstanceType<typeof C>;
let instanceType: TypeC;
instanceType = {
  x: 1,
  y: 2,
};

console.log("Instance type : ", instanceType);
