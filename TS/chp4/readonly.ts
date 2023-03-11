interface TodoInterface {
  title: string;
}

let readOnlyTodo: Readonly<TodoInterface> = {
  title: "Readonly Todo",
};

console.log("ReadOnly Todo ", readOnlyTodo);

// readOnlytodo.title = 'Changed';
