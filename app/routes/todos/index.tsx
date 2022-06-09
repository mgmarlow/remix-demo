import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TodoItem from "~/components/TodoItem";
import { getTodos, Todo } from "~/todo.server";

export const loader: LoaderFunction = () => {
  return json({
    todos: getTodos(),
  });
};

const TodosIndex = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2>todo</h2>

      {loaderData.todos.length > 0 ? (
        <ul>
          {loaderData.todos.map((todo: Todo) => {
            return (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Add some todos to get started</p>
      )}
    </div>
  );
};

export default TodosIndex;
