import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUserData } from "../../redux/selector";

export const LayoutAuth = () => {
  // const userData = useSelector(selectUserData);

  return (
    <header>
      <nav>
        <ul>
          {/* {userData ? (
            <>
              <li>
                <NavLink to="home">home</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="register">Register</NavLink>
              </li>
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
            </>
          )} */}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
};
