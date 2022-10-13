console.log([1, 2, 3, 4].map((x) => x * x));
console.log([1, 2, 3, 4].map(parseInt)); // output [1,Nan,Nan,Nan]
// parseInt(1,0)    1
// parseInt(2,1)    Nan
// parseInt(3,2)    Nan

const unary = (fn) => (fn.length === 1 ? fn : (arguments) => fn(arguments));

console.log([1, 2, 3, 4].map(unary(parseInt)));
function acceptTwo(x, y) {
  console.log("X :", x, " Y :", y);
}

let acceptOne = unary(acceptTwo);
acceptOne(1, 2);

const once = (fn) => {
  let done = false;
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

function api() {
  console.log("api called");
}

let apiCall = once(api);
apiCall();
apiCall();

let memorize = (fn) => {
  let lookupTable = {};

  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};
let factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

let fact = memorize(factorial);
fact(5);
fact(4);
