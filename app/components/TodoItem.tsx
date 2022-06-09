import { useFetcher } from "@remix-run/react";
import type { Todo } from "~/todo.server";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const toggle = useFetcher();
  const className = todo.completed ? "todo completed" : "todo";

  return (
    <toggle.Form method="put" action={`/todos/${todo.id}`}>
      <label>
        <input
          type="checkbox"
          name="checked"
          checked={todo.completed}
          onChange={(e) => toggle.submit(e.target.form)}
        />
        <span className={className}>{todo.text}</span>
      </label>
    </toggle.Form>
  );
};

export default TodoItem;
