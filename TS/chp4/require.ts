interface ITodo {
  title?: string;
  description?: string;
}

let optionalTodo: ITodo = {
  title: "Optional Todo",
};

let requiredTodo: Required<ITodo> = {
  title: "Required Todo",
  description: " Requiured Data",
};

console.log("Optional Todo : ", optionalTodo);
console.log("Required Todo : ", requiredTodo);
