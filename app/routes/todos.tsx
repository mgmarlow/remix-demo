import { LinksFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import todoStyles from '~/styles/todos.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: todoStyles
    }
  ]
}

const Todos = () => {
  return (
    <div>
      <h1>todos</h1>

      <nav>
        <ul>
          <li><NavLink to="" end>todo</NavLink></li>
          <li><NavLink to="completed">completed</NavLink></li>
          <li><NavLink to="all">all</NavLink></li>
          <li><NavLink to="new">new</NavLink></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Todos;
