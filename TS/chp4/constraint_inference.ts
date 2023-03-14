type Flatten1<Type> = Type extends Array<infer Item> ? Item : Type;
type Str1 = Flatten<(string | number)[]>;
type Something1 = Flatten1<number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;

let flattern: Flatten1<Array<string>>;
flattern = "Flattern Constraint";

let str1: Str1;
str1 = 10;
str1 = "Hello";

let data1: Something1;
data1 = 100;

let booleanReturn: GetReturnType<() => boolean>;
booleanReturn = true;

let num1: Num;
num1 = 100;
