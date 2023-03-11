function create<Type>(c: { new (): Type }): Type {
  return new c();
}

class Some {
  name = "Some Class";
  constructor() {
    console.log("Some constructor invoke");
  }
}

let instance = create(Some);
console.log(instance.name);
