let toUpper = (str) => str.toUpperCase();
let prependHi = (str) => "Hi " + str;
function compose(funcA, funcB) {
  return function (str) {
    return funcA(funcB(str));
  };
}

let composition = compose(toUpper, prependHi);
console.log(composition("Merry how are you?"));

const composeFn =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const tap = (fn, a) => (fn(a), a);
tap(console.log, "hello guy");

const log = tap(console.log);
let composeTap = compose(log, toUpper, log, prependHi);
console.log("Marry", composeTap("Marry"));
