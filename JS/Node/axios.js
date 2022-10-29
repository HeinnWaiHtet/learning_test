const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/2")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(er);
  });
