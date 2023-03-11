type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockAccount = {
  readonly id: number;
  readonly name: string;
};

type UnLockAccount = CreateMutable<LockAccount>;

let unlock: UnLockAccount = {
  id: 1,
  name: "HWH",
};

console.log("UnLock Account : ", unlock);

unlock.name = "HWH ACM";
console.log("UnLock Account : ", unlock);
