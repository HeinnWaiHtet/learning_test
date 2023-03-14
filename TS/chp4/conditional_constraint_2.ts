type IMessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}
type Human = {
  name: string;
  age: number;
};
interface Another {
  message: { name: string };
}

type EmailMessageContents = IMessageOf<Email>;
type DogMessage = IMessageOf<Dog>;
type HumanMessage = IMessageOf<Another>;

let emailContents: EmailMessageContents;
let dogMessage: DogMessage;
let humanMessage: HumanMessage;

emailContents = "Constraint Mail";
humanMessage = {
  name: "HWH",
};

console.log(emailContents, humanMessage);

type Flatten<T> = T extends any[] ? T[number] : T;
type Str = Flatten<(string | number)[]>;
type Something = Flatten<number>;

let stringFlat: Str;
let something: Something;

stringFlat = "Ok";
stringFlat = 10;
something = 100;
console.log(stringFlat, something);
