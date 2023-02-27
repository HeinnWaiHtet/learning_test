type Animal1 = {
  name: string;
};

type Bear1 = Animal1 & {
  honey: true;
};

let bear1: Bear1 = {
  name: "BEAR1",
  honey: true,
};

console.log("Bear ", bear1);
