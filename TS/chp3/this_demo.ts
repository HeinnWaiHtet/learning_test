class NameClass {
  name: string = "My Class";
  getName() {
    console.log("Get Name : ", this);
    return this.name;
  }
}

let c = new NameClass();
let objName = {
  name: "Obj Name",
  getName: c.getName,
};

console.log(objName.getName());

let method = objName.getName;
console.log(method());
