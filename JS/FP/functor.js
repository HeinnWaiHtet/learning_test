let Functor = (v) => ({
  value: v,
  map: (f) => Functor(f(v)),
  valueOf: () => v,
});

let x = 1;
let incFn = (val) => val + 1;

Functor.of = (v) => Functor(v);

let functorInc = Functor.of(x);
let newX = functorInc.map(incFn);
console.log("Old X : ", x, " NewX : ", newX.valueOf());
