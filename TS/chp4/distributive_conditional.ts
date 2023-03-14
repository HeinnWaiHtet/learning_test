type ToArray<T> = T extends any ? T[] : never;
type StringOrNumberArray = ToArray<string | number>;

let stringArray: StringOrNumberArray;
stringArray = ["hello", "hi", "how are you"];

let numArr: StringOrNumberArray;
numArr = [1, 2, 3];

type ToMixArray<T> = T[] extends any[] ? T[] : never;
type MixArrayType = ToMixArray<string | number>;

let mixArr: MixArrayType;
mixArr = ["HWH", 2, "Monywa"];

// cannot assign except string and number like boolean, null
