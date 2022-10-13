const Monad = {
  of: (value) => ({
    value: value,
    inspect: () => `Monad(${deepInspect(value)})`,
    map: (fn) => Monad.of(fn(value)),
    flatMap: (fn) => fn(value),
  }),
};

const myMonad = Monad.of(1); // Monad(1)
const add1Monad = (a) => Monad.of(a + 1);
console.log("Two level ", myMonad.map(add1Monad).value);

const myMonadPlus1 = myMonad.flatMap(add1Monad);
console.log("One layer ", myMonadPlus1.value);
