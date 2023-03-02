interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

interface Animal {
  anotherProperty: string;
}

let bear: Bear = {
  name: "Mr Bear",
  honey: true,
  anotherProperty: "Ok",
};

console.log("Bear ", bear);
