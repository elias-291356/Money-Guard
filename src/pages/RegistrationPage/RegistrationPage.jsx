import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import { selectUserData } from "../../redux/selector.js";

const RegistrationPage = () => {
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/dashboard");
    }
  }, [userData, navigate]);
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
