function alwaysThrows(): never {
  throw new Error("this will always throw");
  //return -1;
}
//alwaysThrows();

enum Role {
  FIRST,
  SECOND,
}

function getEnumValue(enumValue: Role): string {
  switch (enumValue) {
    case Role.FIRST:
      return "First Case";
    case Role.SECOND:
      return "Second Case";
  }
  let returnValue: never = enumValue;
  return returnValue;
}
console.log("getEnum ", getEnumValue(Role.SECOND));
