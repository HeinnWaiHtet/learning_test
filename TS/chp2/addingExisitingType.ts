interface Window1 {
  title: string;
}

interface Window1 {
  height: number;
}

let w: Window1;
w = {
  title: "WINDOW",
  height: 21,
};

console.log("Window ", w);

type Window2 = {
  title: string;
};

/*
cannot duplicate
type Window2 = {
  height: number;
};
*/

let w1: Window2;
w1 = {
  title: "Window2",
};

console.log("Window with type ", w1);
