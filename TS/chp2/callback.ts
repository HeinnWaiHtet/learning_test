function callBack(num: number): void {
  console.log("Data from callback : ", num);
}

type CallBackFunc = (num: number) => void;

function getResult(cb: CallBackFunc) {
  setTimeout(() => {
    cb(200);
  }, 2000);
}

let kk = getResult(callBack);
console.log("Result is : ", kk);
