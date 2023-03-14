type Introduction = "Hello" | "Hi" | "How are you";
type Capital = Uppercase<Introduction>;
let introCapital: Capital;
introCapital = "HELLO";
// introCapital = 'hi'; union Introduction and other data cannot assign

type Lower = Lowercase<Introduction>;
let introLower: Lower;
introLower = "hello";

console.log("Upper : ", introCapital, " Lower : ", introLower);
