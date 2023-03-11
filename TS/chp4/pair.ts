class Pair<TypeA, TypeB> {
  private a: TypeA;
  private b: TypeB;

  constructor(a: TypeA, b: TypeB) {
    this.a = a;
    this.b = b;
  }

  get first(): TypeA {
    return this.a;
  }

  set first(newA: TypeA) {
    this.a = newA;
  }

  get second(): TypeB {
    return this.b;
  }

  set second(newB: TypeB) {
    this.b = newB;
  }
}

let pair = new Pair<number, string>(10, "Hello");
let first = pair.first;
let second = pair.second;
console.log("First ", first, " Second ", second);
pair.first = 20;
pair.second = "Hello World";
console.log("First ", pair.first, " Second ", pair.second);
