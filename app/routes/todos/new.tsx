import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { createTodo } from "~/todo.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const text = formData.get("todo");

  if (typeof text !== "string") {
    return json({
      errors: ["An error occurred"],
    });
  }

  createTodo(text);

  return redirect("/todos");
};

const NewTodo = () => {
  const actionData = useActionData();

  return (
    <div>
      <h2>New todo</h2>

      {actionData?.errors && <p>{actionData.errors[0]}</p>}

      <Form method="post">
        <input type="text" name="todo" required placeholder="buy groceries" />

        <button type="submit">add todo</button>
      </Form>
    </div>
  );
};

export default NewTodo;
