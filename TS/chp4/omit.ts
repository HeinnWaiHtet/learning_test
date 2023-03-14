interface ITodoOmit {
  title: string;
  description: string;
  completed: boolean;
  date: string;
}

type TodoOmit = Omit<ITodoOmit, "description" | "date">;

let todoOmit: TodoOmit;
todoOmit = {
  title: "Omit Todo",
  completed: true,
};

console.log("Todo Omit : ", todoOmit);
