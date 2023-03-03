class ArrowThis {
  name = "Arror This";
  getName = () => this.name;
}

let arrowThis = new ArrowThis();
let arrowMethod = arrowThis.getName;

console.log(arrowThis.getName());
console.log(arrowMethod());
