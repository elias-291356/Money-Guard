import React from "react";
import { useForm } from "react-hook-form";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          {...register("E-mail", { max: 20, min: 4 })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { max: 20, min: 4 })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
