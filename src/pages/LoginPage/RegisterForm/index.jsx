import { useForm } from "react-hook-form";

export const RegisterForm = ({
  handleSubmitRegister,
  setIsLoging,
  isLoging,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmitRegister(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 p-6  mb-4 rounded-md  w-full"
      >
        <p className="text-2xl text-white">REGISTER</p>
        <input
          className="px-2 py-1 rounded-md outline-none"
          type="text"
          name="fullName"
          placeholder="fullname"
          {...register("fullName", { required: true })}
        />

        <input
          className="px-2 py-1 rounded-md outline-none"
          type="email"
          name="email"
          placeholder="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          className="px-2 py-1 rounded-md outline-none"
          type="password"
          name="password"
          placeholder="password"
          {...register("password", { required: true, minLength: 6 })}
        />

        <input
          className="px-2 py-1 rounded-md outline-none"
          type="password"
          name="repPassword"
          placeholder="repeat password"
          {...register("repPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />

        <button className=" bg-green-700 px-8 py-2 text-white">Register</button>
        <p
          className="cursor-pointer bottom-3 w-full text-center text-white"
          onClick={() => setIsLoging(!isLoging)}
        >
          Already have an account? Login
        </p>
      </form>
      <div className="flex flex-col gap-2 absolute bottom-[20vh]">
        {errors.fullName && (
          <p className="text-white bg-red-500 px-2 py-1 rounded-md">
            - Fullname is required
          </p>
        )}
        {errors.email && (
          <p className="text-white bg-red-500 px-2 py-1 rounded-md">
            - Please enter a valid email address
          </p>
        )}
        {errors.password && (
          <p className="text-white bg-red-500 px-2 py-1 rounded-md">
            - Password must be at least 6 characters long
          </p>
        )}
        {errors.repPassword && (
          <p className="text-white bg-red-500 px-2 py-1 rounded-md">
            - Passwords must match
          </p>
        )}
      </div>
    </>
  );
};
