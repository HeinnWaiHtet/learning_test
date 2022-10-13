let toUpper = (str) => str.toUpperCase();
let appendHi = (str) => str + " Hi";

//happy case
const right = (v) => ({
  map: (f) => right(f(v)),
  matchWith: (pattern) => {
    pattern.right(v);
    return right(v);
  },
});

//sad case
const left = (v) => ({
  map: () => left(v),
  matchWith: (pattern) => {
    pattern.left(v);
    return left(v);
  },
});

right(4)
  .map((x) => x * x)
  .matchWith({
    right: (v) => console.log(v),
    left: (v) => console.log("left" + v),
  });

left(4)
  .map((x) => x * x)
  .matchWith({
    right: (v) => console.log(v),
    left: (v) => console.log("left " + v),
  });

function div(a, b) {
  if (b == 0) {
    throw Error("Division by zero");
  } else {
    return a / b;
  }
}

let Try = (f) => {
  try {
    let result = f();
    return right(result);
  } catch (e) {
    return left(e);
  }
};

Try(div.bind(null, 3, 0))
  .matchWith({
    right(v) {
      console.log("Ok ", v);
    },
    left(e) {
      console.log("Error ", e);
    },
  })
  .map((x) => x + 1)
  .map((x) => x * x)
  .matchWith({
    right(v) {
      console.log("Ok ", v);
    },
    left(e) {
      console.log("Error ", e);
    },
  });
