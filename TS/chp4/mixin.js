console.log(Math.max(10, 2, 40, 5));
let arr = [101, 3, 40, 45];
console.log(Math.max.apply(null, arr));

function mixin(source, target) {
  for (let prop in source) {
    if (!target.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
}

let s = {
  name: "HWH",
  hello: function () {
    console.log("Hello");
  },
};
let target = {
  hello: function () {
    console.log("Target Hello");
  },
};
mixin(s, target);
target.hello();
console.log(target.name);
