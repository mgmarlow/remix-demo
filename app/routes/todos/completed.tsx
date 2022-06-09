import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TodoItem from "~/components/TodoItem";
import { getCompletedTodos, Todo } from "~/todo.server";

export const loader: LoaderFunction = () => {
  return json({
    todos: getCompletedTodos(),
  });
};

const Completed = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2>completed</h2>

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

export default Completed;
