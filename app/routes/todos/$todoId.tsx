import { ActionFunction, json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { updateTodo } from "~/todo.server";

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.todoId);
  const formData = await request.formData();
  const checked = formData.get("checked");

  try {
    updateTodo(params.todoId, checked === 'on');
    return json({ ok: true });
  } catch {
    return json({ error: "unable to update todo" });
  }
};
