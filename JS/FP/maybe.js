let upper = (value) => value.toUpperCase();
let appendHi = (val) => "Hi" + val;

let result = R.pipe(upper, appendHi);
//console.log(result(null));

let MayBe = (v) => ({
  value: v,
  map(f) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(f(v));
  },
  valueOf: () => v,
  isNothing: () => v === undefined || v === null,
});

MayBe.of = (v) => MayBe(v);

let emptyMaybe = MayBe.of(null);
let upperMaybe = emptyMaybe.map(upper).map(appendHi);
console.log(emptyMaybe.valueOf());
