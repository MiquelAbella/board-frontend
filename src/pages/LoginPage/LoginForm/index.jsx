import { useForm } from "react-hook-form";

export const LoginForm = ({ handleSubmitLogin, setIsLoging, isLoging }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleSubmitLogin(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4 p-6  mb-4 rounded-md   w-full"
    >
      <p className="text-2xl text-white">LOGIN</p>
      <input
        className="px-2 py-1 rounded-md outline-none"
        type="email"
        name="email"
        placeholder="email"
        {...register("email")}
      />
      <input
        className="px-2 py-1 rounded-md outline-none"
        type="password"
        name="password"
        placeholder="password"
        {...register("password")}
      />
      <button className=" bg-green-700 px-8 py-2 text-white">Login</button>
      <p
        className="cursor-pointer bottom-3 w-full text-center  text-white"
        onClick={() => setIsLoging(!isLoging)}
      >
        Don't have an account? Register
      </p>
    </form>
  );
};
