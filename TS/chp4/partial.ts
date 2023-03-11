interface IAbRequired {
  a: number;
  b: string;
}
let ab: IAbRequired = {
  a: 1,
  b: "test",
};

type WeakInterface<Type> = {
  [Property in keyof Type]?: Type[Property];
};

let abWeak: WeakInterface<IAbRequired> = {
  a: 21,
};

console.log("Strong Type ", ab);
console.log("Weak Type ", abWeak);

interface Todo {
  title: string;
  description: string;
}

let todo: Partial<Todo> = {
  title: "Partial Todo",
};

console.log("Partial Todo : ", todo);
