import { Todo } from "./App";

export interface Todos {
  todos: Todo[];
  checkTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}