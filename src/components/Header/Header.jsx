import React from "react";
import sprite from "../../images/sprite.svg";
import {
  ContainerHeader,
  ContainerLogo,
  ExitButtonSvg,
  LogoNameHeader,
  LogoutHeader,
  SvgLogoHeader,
  UserName,
} from "./HeaderStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/selector";
import { logoutThunk } from "../../redux/thunk";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const username = userData?.username;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    setTimeout(() => {
      navigate("/login");
    }, 600);
  };
  return (
    <>
      <ContainerHeader>
        <ContainerLogo>
          <SvgLogoHeader>
            <use href={`${sprite}#icon-logo`}></use>
          </SvgLogoHeader>
          <LogoNameHeader>Money Guard</LogoNameHeader>
        </ContainerLogo>
        <LogoutHeader>
          <UserName>{username} </UserName>
          <ExitButtonSvg onClick={handleLogout}>
            <use href={`${sprite}#icon-exit`}></use>
          </ExitButtonSvg>
        </LogoutHeader>
      </ContainerHeader>
    </>
  );
};

export default Header;
