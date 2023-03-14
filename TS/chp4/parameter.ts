type FunctType = (a: number, b: string) => string;

type ParameterType = Parameters<FunctType>;

let tuple: ParameterType;
tuple = [1, "Hello"];
console.log("Parameter type : ", tuple);

function ParamTypeFunction(a: number, b: string): string {
  return a + b.toUpperCase();
}

console.log(ParamTypeFunction(...tuple));

type OurReturnType = ReturnType<FunctType>;
let return_type: OurReturnType;
return_type = "HWH";
console.log("Return Type ", return_type);

return_type = ParamTypeFunction(...tuple);
console.log("Return Type ", return_type);
