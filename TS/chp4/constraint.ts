interface LengthWise {
  length: number;
}

function loggingIdentity<Type extends LengthWise>(args: Type): Type {
  console.log(args.length);
  return args;
}

loggingIdentity<string>("hello");
loggingIdentity("Other Ways");
loggingIdentity<Array<number>>([20, 30, 40]);
// loggingIdentity<number>(23); throw error number has no length
loggingIdentity<any>({
  length: 21,
  otherProperties: "Other",
});
