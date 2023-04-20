import React from "react";

export const LoginForm = ({
  handleSubmitLogin,
  loginValues,
  setIsLoging,
  isLoging,
  handleLoginChange
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500 md:h-screen h-full w-full md:w-1/2">
      <form
        onSubmit={handleSubmitLogin}
        className="flex flex-col items-center justify-center gap-4 p-6  mb-4 rounded-md h-full md:h-1/2 w-full md:w-1/2"
      >
        <p className="text-2xl text-white">LOGIN</p>
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="email"
          name="email"
          placeholder="email"
          values={loginValues.email}
          onChange={handleLoginChange}
        />
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="password"
          name="password"
          placeholder="password"
          values={loginValues.password}
          onChange={handleLoginChange}
        />
        <button className=" bg-green-700 px-8 py-2 text-white">Login</button>
        <p
          className="cursor-pointer bottom-3 w-full text-center  text-white"
          onClick={() => setIsLoging(!isLoging)}
        >
          Don't have an account? Register
        </p>
      </form>
    </div>
  );
};
