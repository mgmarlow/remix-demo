import { Todo } from "./todo.server";

export type DbClient = {
  todos: Todo[];
};

let db: DbClient;

declare global {
  var __db__: DbClient;
}

if (!global.__db__) {
  global.__db__ = {
    todos: [
      { id: '1', text: "Buy trail mix", completed: false },
      {
        id: '2',
        text: "Demo Remix",
        completed: true,
      },
      {
        id: '3',
        text: "Go outside",
        completed: false,
      },
    ],
  };
}

db = global.__db__;

export { db };
