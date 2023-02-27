interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

let bear: Bear;
bear = {
  name: "COLA",
  honey: true,
};

console.log("Bear ", bear);
