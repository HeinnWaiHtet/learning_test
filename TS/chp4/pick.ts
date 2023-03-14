interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PickTodo = Pick<Todo, "title" | "completed">;

let pickTodo: PickTodo;
pickTodo = {
  title: "Pick Todo",
  completed: true,
};

console.log("Pick ", pickTodo);
