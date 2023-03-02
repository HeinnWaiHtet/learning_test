interface IPerson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof IPerson;
let dynamicType: PersonPropertyName;
dynamicType = "id";

let obj: IPerson = {
  id: 1,
  name: "Something",
};
let propertyName: PersonPropertyName = "id";
console.log("Obj ", obj[propertyName]);
