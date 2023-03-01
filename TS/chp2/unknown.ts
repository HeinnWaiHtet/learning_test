let data1: any = {
  mehtod() {
    console.log("Method is called");
  },
};
data1.mehtod();

let unknown: unknown = {
  method() {
    console.log("Unknown method is called");
  },
};
// unknown.mehtod(); cannot invoke unkonw type method or properties

unknownMethod(unknown); // can pass unknow method, properties like that
function unknownMethod(data: any) {
  for (let prop in data) {
    if (typeof data[prop] === "function") {
      data[prop]();
    }
  }
}
