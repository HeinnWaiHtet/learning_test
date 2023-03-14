function ToHex(this: Number) {
  return this.toString(16);
}

function NumberToString(n: ThisParameterType<typeof ToHex>) {
  return ToHex.apply(n);
}

console.log("20 To hex : ", NumberToString(20));

let fiveToHex: OmitThisParameter<typeof ToHex>;
fiveToHex = ToHex.bind(50);

console.log("Omit this param to Hex : ", fiveToHex());
