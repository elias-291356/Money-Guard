import { Outlet } from "react-router-dom";

export const LayoutAuth = () => {
  return (
    <>
      {/* <header> */}
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
      {/* </header> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
