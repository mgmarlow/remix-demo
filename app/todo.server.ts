import { db } from "./db.server";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const getAllTodos = () => {
  return db.todos.slice();
};

export const getCompletedTodos = () => {
  return getAllTodos().filter((todo) => todo.completed);
};

export const getTodos = () => {
  return getAllTodos().filter((todo) => !todo.completed);
};

export const createTodo = (text: string) => {
  db.todos.push({ id: `${getAllTodos().length + 1}`, text, completed: false });
};

export const updateTodo = (id: string, checked: boolean) => {
  db.todos = db.todos.map((todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: checked,
      };
    }

    return todo;
  });
};
