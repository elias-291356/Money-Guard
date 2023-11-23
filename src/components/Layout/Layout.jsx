import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          {/* <Item className="list"> */}
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="statistics"> Statistics</NavLink>
            </li>
            <li>
              <NavLink to="register"> Register</NavLink>
            </li>
            <li>
              <NavLink to="login"> Login</NavLink>
            </li>
            <li>
              <NavLink to="dashboard"> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="currency"> Currency</NavLink>
            </li>
          </ul>

          {/* </Item> */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
