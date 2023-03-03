abstract class BaseAbstract {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}
class DerivedAbstract extends BaseAbstract {
  getName() {
    return "Derived";
  }
}
let objAbstract = new DerivedAbstract();
console.log("Obj ", objAbstract.getName());

function greet(ctor: new () => BaseAbstract) {
  const instance = new ctor();
  instance.printName();
}
greet(DerivedAbstract);
//greet(BaseAbstract);
