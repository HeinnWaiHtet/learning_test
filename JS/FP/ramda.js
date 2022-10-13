let obj = [
  {
    name: "HWH",
    gender: "Male",
  },
  {
    name: "ACM",
    gender: "FeMale",
  },
  {
    name: "Ma Ma",
    gender: "FeMale",
  },
  {
    name: "Mg Mg",
    gender: "Male",
  },
];

let arr = [1, 1, 1, 2, 2, 3, 5, 5, 5, 5],
  k = 2;

let groupByGender = R.groupBy(R.identity);
let group = groupByGender(arr);
let objArr = R.map((ele) => [ele[0], ele.length])(group);
let multiArr = R.values(objArr);
let sortArr = R.sort((a, b) => b[1] - a[1])(multiArr);
let single = R.map((ele) => ele[0])(sortArr);
let result = R.take(2)(single);
console.log(result);

let data = [1, 1, 1, 2, 2, 3, 5, 5, 5, 5];
let topKValue = R.pipe(
  R.groupBy(R.identity),
  R.map((ele) => [ele[0], ele.length]),
  R.values,
  R.sort((a, b) => b[1] - a[1]),
  R.map((ele) => ele[0]),
  R.take(2)
);

console.log("Get Top 2 values", topKValue(data));
