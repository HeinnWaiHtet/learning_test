class NonGenStack {
  array: Array<number>;
  constructor(array: Array<number>) {
    this.array = array;
  }
}

class GenericStack<T> {
  items: Array<T> = [];

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

let numStack = new GenericStack<number>();
numStack.push(10);
//numStack.push("100");

let strStack = new GenericStack<string>();
strStack.push("Hello");
strStack.push("One");

console.log("Pop ", numStack.pop());
console.log("Pop ", strStack.pop());
console.log("Pop ", strStack.pop());
