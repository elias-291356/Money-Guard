import React from "react";

import { useForm } from "react-hook-form";
import {
  AccentButton,
  AppNameH1,
  Container,
  FormLoginContainer,
  FormLoginWrap,
  InputForm,
  Logo,
  LogoWrap,
  NoAccentButton,
  StyledNavLink,
  WrapButtonsForm,
  WrapEmail,
  WrapPassword,
} from "../LoginForm/LoginForm.styled";
import {
  FormLoginWrapRegister,
  InputesWrapperRegister,
  WrapName,
} from "./RegistrationForm";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container>
      <FormLoginContainer>
        <LogoWrap>
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
            >
              <g clip-path="url(#clip0_34_6820)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2328 3.50029C16.4298 3.04956 14.6269 2.1481 13.2747 0.795898C11.9225 2.1481 10.1196 3.04956 8.31665 3.50029C8.76738 7.55689 10.1196 10.2613 13.2747 12.5149C16.4298 10.2613 18.2328 7.55689 18.2328 3.50029Z"
                  fill="#FFC727"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4296 20.2824L3.80908 5.4082V12.6199L13.7252 23.8882L16.4296 20.2824Z"
                  fill="#FBFBFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.782 18.9306L23.1908 12.6204V5.85938L14.6268 15.7755L17.782 18.9306Z"
                  fill="#FBFBFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2327 21.1842V25.2408L23.1907 19.3813V15.3247L18.2327 21.1842Z"
                  fill="#FBFBFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.76714 21.1842L3.80908 15.3247V19.3813L8.76714 25.2408V21.1842Z"
                  fill="#FBFBFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_6820">
                  <rect
                    width="25.4605"
                    height="25.4605"
                    fill="white"
                    transform="translate(0.769775)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Logo>
          <AppNameH1>Money Guard</AppNameH1>
        </LogoWrap>
        <FormLoginWrapRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputesWrapperRegister>
              <WrapName>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.82968 19.4172 3.63653 19.6728 3.64285 20.0183C3.64773 20.2852 3.81533 20.6219 4.02534 20.7867C4.29716 21 4.67384 21 5.4272 21H18.5727C19.3261 21 19.7028 21 19.9746 20.7867C20.1846 20.6219 20.3522 20.2852 20.3571 20.0183C20.3634 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.17 15 12 15Z"
                    fill="white"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z"
                    fill="white"
                    fill-opacity="0.4"
                  />
                </svg>
                <InputForm
                  type="text"
                  placeholder="Name"
                  {...register("Name", { max: 20, min: 4 })}
                />
              </WrapName>
              <WrapEmail>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_34_6413)">
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_6413">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <InputForm
                  type="email"
                  placeholder="E-mail"
                  {...register("E-mail", { max: 20, min: 4 })}
                />
              </WrapEmail>
              <WrapPassword>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_34_6400)">
                    <path
                      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_6400">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <InputForm
                  type="password"
                  placeholder="Password"
                  {...register("password", { max: 20, min: 4 })}
                />
              </WrapPassword>
              <WrapPassword>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_34_6400)">
                    <path
                      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_6400">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <InputForm
                  type="password"
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
