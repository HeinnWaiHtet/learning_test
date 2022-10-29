const fs = require("fs");
const start = new Date();
try {
  console.log("start");
  const data = fs.readFileSync("test.txt", "utf-8");
  const data1 = fs.readFileSync("test2.txt", "utf-8");
  const end = new Date();
  console.log(end - start);
  console.log("end");
} catch (err) {
  console.log("error", err);
}
