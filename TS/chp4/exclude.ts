type State = "start" | "pending" | "end" | "failed";
type StateExclude = Exclude<State, "failed">;

let currentState: StateExclude;
currentState = "start";
console.log("State Exclude : ", currentState);
console.log("Type of Current State", typeof currentState);

interface ITodoExclude {
  title: string;
  description: string;
  iscompleted: boolean;
}
type TodoExclude = Exclude<ITodoExclude, "description">;

let todoExclude: TodoExclude;
todoExclude = {
  title: "Todo Exclude",
  description: "Todo Exclude",
  iscompleted: false,
}; // not work Exclude other type except Union

console.log("Exclude Todo ", todoExclude);
