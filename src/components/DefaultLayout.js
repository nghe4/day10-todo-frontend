import { NavLink, Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/done">Done List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
