type T0 = Extract<"a" | "b" | "c", "a" | "f">;
let t0: T0 = "a";
// t0 = "b";    cannot assign data except 'a'

console.log("Extract ", t0);

type NonNull = NonNullable<string | number | undefined>;
let data: NonNull = "undefined";
data = "null";
// data = null;         cannot assign null value
// data = undefined;    cannot assign undefined value
console.log("Data : ", data);
