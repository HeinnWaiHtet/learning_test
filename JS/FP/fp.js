let humans = [
  {
    name: "Mg Mg",
    age: 31,
    gender: "Male",
  },
  {
    name: "Aung Aung",
    age: 21,
    gender: "Male",
  },
  {
    name: "Ma Ma",
    age: 18,
    gender: "FeMale",
  },
  {
    name: "Hla Hla",
    age: 34,
    gender: "FeMale",
  },
];

// Imperative Design
let result = [];
for (let human of humans) {
  if (human.age > 30) {
    let obj = Object.assign(human);
    if (obj.gender === "Male") {
      obj.name = `Mr ${obj.name}`;
    } else {
      obj.name = `Mrs ${obj.name}`;
    }
    result.push(obj);
  }
}
console.log("Declarative Result", result);

// Functional Design
let adult = (human) => human.age > 30;
let namePrefix = (human) =>
  human.gender === "Male"
    ? { ...human, name: `Mr ${human.name}` }
    : { ...human, name: `Mrs ${human.name}` };

let fpResult = humans.filter(adult).map(namePrefix);
console.log("FP Result ", fpResult);

let fpResult1 = humans.reduce((group, b) => {
  return group[b.gender] === "Male"
    ? ((group[b.gender] = Object.assign({
        total: group[b.gender].total + b.age,
        count: group[b.gender].count + 1,
      })),
      group)
    : ((group[b.gender] = Object.assign({
        total: b.age,
        count: 1,
      })),
      group);
}, {});
console.log("Average ", fpResult1);
