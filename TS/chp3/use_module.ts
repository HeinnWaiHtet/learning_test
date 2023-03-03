import func, { another } from "./my_module";
import * as another_module from "./another_module";
import type { Color, Status, Human } from "./types_module";

func();
another();

another_module.func_one();
another_module.func_two();

let c: Color = "blue";
console.log("C ", c);

let h: Human = {
  name: "Someone",
  age: 39,
};
console.log("h ", h);
