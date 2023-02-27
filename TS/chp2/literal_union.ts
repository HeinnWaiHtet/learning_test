type PromiseState = "pending" | "completed" | "cancel";
let state: PromiseState;
state = "pending";
console.log("State ", state);

state = "completed";
console.log("State ", state);
