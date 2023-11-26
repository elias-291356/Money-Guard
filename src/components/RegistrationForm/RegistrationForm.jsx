import React from "react";
import {
  AccentButton,
  AppNameH1,
  Container,
  FormLoginContainer,
  InputForm,
  Logo,
  LogoWrap,
  NoAccentButton,
  StyledNavLink,
  SvgAuthForm,
  SvgLogo,
  WrapButtonsForm,
  WrapEmail,
  WrapPassword,
} from "../LoginForm/LoginForm.styled";
import {
  FormLoginWrapRegister,
  InputesWrapperRegister,
  WrapName,
} from "./RegistrationForm";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import sprite from "../../images/sprite.svg";
import { setSubmit } from "../../redux/reducer/userReducer";
import { registerThunk } from "../../redux/thunk";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  console.log(errors);

  return (
    <Container>
      <FormLoginContainer>
        <LogoWrap>
          <Logo>
            <SvgLogo>
              <use href={`${sprite}#icon-logo`}></use>
            </SvgLogo>
          </Logo>
          <AppNameH1>Money Guard</AppNameH1>
        </LogoWrap>
        <FormLoginWrapRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputesWrapperRegister>
              <WrapName>
                <SvgAuthForm>
                  <use href={`${sprite}#icon-user`}></use>
                </SvgAuthForm>
                <InputForm
                  name="username"
                  required
                  type="text"
                  placeholder="Name"
                  {...register("Name", { max: 20, min: 4 })}
                />
              </WrapName>
              <WrapEmail>
                <SvgAuthForm>
                  <use href={`${sprite}#icon-email`}></use>
                </SvgAuthForm>
                <InputForm
                  name="email"
                  required
                  type="email"
                  placeholder="E-mail"
                  {...register("E-mail", { max: 20, min: 4 })}
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
              <WrapPassword>
                <SvgAuthForm>
                  <use href={`${sprite}#icon-password`}></use>
                </SvgAuthForm>
                <InputForm
                  name="password"
                  required
                  type="password"
                  minLength={6}
                  placeholder="Confirm password"
                  {...register("password", { max: 20, min: 4 })}
                />
              </WrapPassword>
            </InputesWrapperRegister>

            <WrapButtonsForm>
              <AccentButton type="submit"> Register</AccentButton>
              <NoAccentButton type="submit">
                <StyledNavLink to={`/login`}>Log in</StyledNavLink>
              </NoAccentButton>
            </WrapButtonsForm>
          </form>
        </FormLoginWrapRegister>
      </FormLoginContainer>
    </Container>
  );
};

export default RegistrationForm;
