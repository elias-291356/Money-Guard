import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LayoutAuth } from "./components/LayoutAuth/LayoutAuth";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { selectToken } from "./redux/selector";
import { refreshUserThunk } from "./redux/thunk";

const App = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk());
  }, [dispatch, token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route index="register" element={<RegistrationPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
