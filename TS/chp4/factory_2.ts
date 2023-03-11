class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

// same to c: new () => A with c : {new () : A }
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Bee).keeper.hasMask);
console.log(createInstance(Lion).keeper.nametag);
