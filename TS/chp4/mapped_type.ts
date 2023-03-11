type Bird = {
  birdType: string;
};

type OnlyBoolsAndBird = {
  [keys: string]: boolean | Bird;
};

type OnlyBoolsAndBird1 = {
  [keys: number]: boolean | Bird;
};

let birdsAndBools: OnlyBoolsAndBird = {
  isFly: true,
  isWarmBlood: true,
  bird: {
    birdType: "Eagel",
  },
};

let birdsAndBools1: OnlyBoolsAndBird1 = {
  1: true,
  2: true,
  3: {
    birdType: "Eagel",
  },
};

console.log("Birds and bools with string keys ", birdsAndBools);
console.log("Birds and bools with number keys ", birdsAndBools1);
