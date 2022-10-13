let isEven = (val) => val % 2 === 0;
let unless = (predicate, fn) => {
  !predicate && fn();
};

[1, 2, 3, 4, 5].forEach((element) => {
  unless(isEven(element), () => {
    console.log(element, " is an odd");
  });
});
