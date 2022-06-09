import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TodoItem from "~/components/TodoItem";
import { getAllTodos, Todo } from "~/todo.server";

export const loader: LoaderFunction = () => {
  return json({
    todos: getAllTodos(),
  });
};

const All = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2>all</h2>

      <ul>
        {loaderData.todos.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
