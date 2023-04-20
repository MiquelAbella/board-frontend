import { useState } from "react";
import { useUser } from "../../context/userContext";
import { AppLogo } from "./AppLogo";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LoginPage = () => {
  const { createUser, loginUser } = useUser();
  const [isLoging, setIsLoging] = useState(true);

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [registerValues, setRegisterValues] = useState({
    fullName: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };
  const handleRegisterChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUser(loginValues);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault(e);
    createUser(registerValues);
  };

  return (
    <div className="bg-white h-screen flex flex-col md:flex-row items-center justify-center ">
      <AppLogo />
      {isLoging ? (
        <LoginForm
          handleSubmitLogin={handleSubmitLogin}
          loginValues={loginValues}
          setIsLoging={setIsLoging}
          isLoging={isLoging}
          handleLoginChange={handleLoginChange}
        />
      ) : (
        <RegisterForm
          handleSubmitRegister={handleSubmitRegister}
          registerValues={registerValues}
          handleRegisterChange={handleRegisterChange}
          setIsLoging={setIsLoging}
          isLoging={isLoging}
        />
      )}
    </div>
  );
};
