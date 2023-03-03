console.log("Pre Prefirst");

class Counter {
  static noOfInstance = 1;
  count: number = 10;

  static {
    console.log("Static instance created");
  }

  constructor() {
    Counter.noOfInstance++;
  }

  inc() {
    this.count++;
    console.log("Counter of Number Instance : ", Counter.noOfInstance);
  }

  static method() {
    console.log("Class ", Counter.noOfInstance);
  }

  static {
    console.log("Static Bolck 2");
  }
}

class StaticBase {
  static greetGreeting() {
    return "Hello World";
  }
}

class StaticDerived extends StaticBase {
  myGreeting = StaticDerived.greetGreeting();
}

let c1 = new Counter();
let c2 = new Counter();

c1.inc();
console.log("C1 ", c1.count);

c2.inc();
console.log("C2 ", c2.count);
console.log("Counter ", Counter.noOfInstance);
