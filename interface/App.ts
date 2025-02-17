export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoFormProps {
  addTodo: (todo: string) => void;
};