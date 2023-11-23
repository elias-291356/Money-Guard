import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LayoutAuth } from "./components/LayoutAuth/LayoutAuth";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const App = () => {
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
