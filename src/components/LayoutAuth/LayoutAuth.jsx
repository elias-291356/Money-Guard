import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUserData } from "../../redux/selector";

export const LayoutAuth = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      <header>
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {userData ? (
              <li>
                <NavLink to="home">ДОМ</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav> */}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
