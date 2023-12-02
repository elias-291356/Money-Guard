import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  FormLoginContainer,
  FormLoginWrap,
  InputForm,
  AccentButton,
  WrapButtonsForm,
  WrapEmail,
  WrapPassword,
  NoAccentButton,
  LogoWrap,
  Logo,
  AppNameH1,
  StyledNavLink,
  SvgLogo,
  SvgAuthForm,
} from "./LoginForm.styled";
import sprite from "../../images/sprite.svg";

import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunk";

const LoginForm = () => {
  //login
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  console.log(errors);

  return (
    <Container>
      <FormLoginWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLoginContainer>
            <LogoWrap>
              <Logo>
                <SvgLogo>
                  <use href={`${sprite}#icon-logo`}></use>
                </SvgLogo>
              </Logo>
              <AppNameH1>Money Guard</AppNameH1>
            </LogoWrap>
            <WrapEmail>
              <SvgAuthForm>
                <use href={`${sprite}#icon-user`}></use>
              </SvgAuthForm>
              <InputForm
                name="email"
                required
                type="email"
                placeholder="E-mail"
                {...register("email", { max: 20, min: 4 })}
              />
            </WrapEmail>
            <WrapPassword>
              <SvgAuthForm>
                <use href={`${sprite}#icon-password`}></use>
              </SvgAuthForm>
              <InputForm
                name="password"
                required
                type="password"
                placeholder="Password"
                minLength={6}
                {...register("password", { max: 20, min: 4 })}
              />
            </WrapPassword>
          </FormLoginContainer>
          <WrapButtonsForm>
            <AccentButton type="submit"> Log in</AccentButton>
            <NoAccentButton type="submit">
              <StyledNavLink to={`/register`}>Register</StyledNavLink>
            </NoAccentButton>
          </WrapButtonsForm>
        </form>
      </FormLoginWrap>
    </Container>
  );
};

export default LoginForm;
