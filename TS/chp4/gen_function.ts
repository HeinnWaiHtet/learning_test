function identity<Type>(arg: Type): Type {
  return arg;
}

let k = identity<number>(20);
console.log("Identity K ", k);

function loggingIdentity<Type>(args: Type[]): Type[] {
  console.log(args.length);
  return args;
}

let numberArray = loggingIdentity<number>([10, 20, 30]);
console.log("Number Array ", numberArray);
