const fs = require("fs");

console.log("start");
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error ", err);
    return;
  }

  console.log(data);
});

console.log("end");

function readFileAsync() {
  const start = new Date();
  console.log(start);
  const p1 = fs.promises.readFile("test.txt", "utf-8");
  const p2 = fs.promises.readFile("test2.txt", "utf-8");
  Promise.all([p1, p2]).then((data) => {
    const end = new Date();
    console.log(data);
    console.log("elapsed Time", end - start);
  });
}

readFileAsync();
