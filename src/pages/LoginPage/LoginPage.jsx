import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectUserData } from "../../redux/selector";

const LoginPage = () => {
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/dashboard");
    }
  }, [userData, navigate]);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
