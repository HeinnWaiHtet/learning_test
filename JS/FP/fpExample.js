let arr = [1, 1, 1, 2, 2, 3, 5, 5, 5, 5],
  k = 2;
let countGroup = {};

function solveWithComparative() {
  for (let data of arr) {
    if (countGroup[data]) {
      countGroup[data]++;
    } else {
      countGroup[data] = 1;
    }
  }

  let countArr = Object.entries(countGroup);
  let sortArr = countArr.sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortArr[i][0]);
  }

  console.log("top 2", result);
}

// solveWithComparative();

let countGp = [];
countGp = arr.reduce(
  (group, b) => (group[b] ? (group[b]++, group) : ((group[b] = 1), group)),
  []
);

let multi = countGp.map((ele, index) => [index, ele]);
let result = multi.filter((ele) => ele != undefined);
result.sort((a, b) => b[1] - a[1]);
let single = result.map((ele) => ele[0]);
let data = single.reduce(
  (arr, b) => (arr.length === k ? arr : [...arr, b]),
  []
);
console.log(data);
