function getFunc(func) {
  return func();
}

function returnFunc() {
  return hello;
}

function hello() {
  console.log("Hello HOF");
}

getFunc(hello);
returnFunc()();
