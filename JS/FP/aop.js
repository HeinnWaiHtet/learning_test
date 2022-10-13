function logging(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "function") {
      console.log("Prop ", prop);
      let oldFunc = obj[prop];
      obj[prop] = function () {
        console.log("Old Function ", prop, " was called");
        oldFunc();
      };
    }
  }
}

let obj = {
  hello() {
    console.log("hello");
  },
  greeting() {
    console.log("Nice To Meet You");
  },
};

logging(obj);
obj.hello();
obj.greeting();
