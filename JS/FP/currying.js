let identity = (x) => x;

function addCurry(x) {
  return function (y) {
    return x + y;
  };
}

const addCurry1 = (x) => (y) => (x = y);

let currying = addCurry1(1);
console.log("add curring 1 and 2 :", currying(2));
console.log("add curring 1 and 2 and 3 :", currying(3));

function add(x, y) {
  return x + y;
}

const curry = (binaryFunc) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFunc(firstArg, secondArg);
    };
  };
};

const curryAdd = curry(add);
console.log("Add of 3 and 4 is ", curryAdd(3)(4));

let curringFunc = (fn) => {
  if (typeof fn !== "function") {
    throw new Error("Not function");
  }

  return function curriedFn(...args) {
    if (fn.length < args.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }

    return fn.apply(null, args);
  };
};

let curringFuncAdd = curringFunc(add);
console.log(curringFuncAdd(3));
