import React from "react";

import { useForm } from "react-hook-form";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { max: 20, min: 2 })}
      />
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
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword", { max: 20, min: 4 })}
      />

      <input type="submit" />
    </form>
  );
};

export default RegistrationForm;
