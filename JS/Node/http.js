const http = require("https");

let option = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  method: "GET",
  path: "/todos/1",
};

const req = http.request(option, (req) => {
  req.on("data", (data) => {
    process.stdout.write(data);
  });
});

req.on("error", (error) => {
  console.log(error);
});

req.end();
