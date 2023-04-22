import { useState } from "react";
import { useUser } from "../../context/userContext";
import { AppLogo } from "./AppLogo";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { getAuth, signInWithPopup } from "firebase/auth";
import app, { googleProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { createGoogleUser, loginGoogleUser, createUser, loginUser } =
    useUser();
  const auth = getAuth(app);

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

  const registerWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { email, displayName } = response.user;
    createGoogleUser({ email, fullName: displayName });
  };

  const loginWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { email } = response.user;
    loginGoogleUser(email);
  };

  const handleSubmitLogin = (loginValues) => {
    loginUser(loginValues);
  };

  const handleSubmitRegister = (registerValues) => {
    createUser(registerValues);
  };

  return (
    <div className="bg-white h-screen flex flex-col md:flex-row items-center justify-center relative ">
      <AppLogo />
      <div className="flex flex-col items-center justify-center bg-blue-500 md:h-screen h-full w-full md:w-1/2">
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
        <div className="flex gap-4">
          <button
            onClick={registerWithPopup}
            className="bg-white px-2 py-1 flex items-center justify-between gap-2 rounded-md"
          >
            Register <FcGoogle />
          </button>
          <button
            onClick={loginWithPopup}
            className="bg-white px-2 py-1 flex items-center justify-between gap-2 rounded-md"
          >
            Login <FcGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
