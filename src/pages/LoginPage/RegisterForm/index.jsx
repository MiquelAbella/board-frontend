import React from "react";

export const RegisterForm = ({
  handleSubmitRegister,
  registerValues,
  handleRegisterChange,
  setIsLoging,
  isLoging,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500 md:h-screen h-full w-full md:w-1/2 ">
      <form
        onSubmit={handleSubmitRegister}
        className="flex flex-col items-center justify-center gap-4 p-6  mb-4 rounded-md md:h-1/2 w-full md:w-1/2"
      >
        <p className="text-2xl text-white">REGISTER</p>
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="text"
          name="fullName"
          placeholder="fullname"
          value={registerValues.fullName}
          onChange={handleRegisterChange}
        />
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="email"
          name="email"
          placeholder="email"
          value={registerValues.email}
          onChange={handleRegisterChange}
        />
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="password"
          name="password"
          placeholder="password"
          value={registerValues.password}
          onChange={handleRegisterChange}
        />
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="repPassword"
          name="repPassword"
          placeholder="password"
          value={registerValues.repPassword}
          onChange={handleRegisterChange}
        />
        <button className=" bg-green-700 px-8 py-2 text-white">Register</button>
        <p
          className="cursor-pointer bottom-3 w-full text-center text-white"
          onClick={() => setIsLoging(!isLoging)}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};
