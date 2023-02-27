function demo() {
  if (true) {
    var i = 10;
    let j = 20;
    const k = 100;
    // k = 22;
    console.log("j ", j);
  }

  {
    var i = "<string> Hello";
    let j = "Hello";
    console.log("j ", j);
  }

  console.log("i", i);
  // console.log("j ", j);
}

demo();
