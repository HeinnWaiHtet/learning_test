const { EventEmitter } = require("events");
const firstEmit = new EventEmitter();

firstEmit.on("FirstEmit", (data) => console.log("Listen Emit", data));

console.log("Process Start");
setTimeout(() => {
  firstEmit.emit("FirstEmit", {
    data: {
      name: "HWH",
      age: 25,
    },
  });
}, 3000);

console.log("run another process");
