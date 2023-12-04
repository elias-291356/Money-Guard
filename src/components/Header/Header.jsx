import React, { useEffect, useState } from "react";
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
import ModalLogout from "../ModalLogout/ModalLogout";

const Header = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const username = userData?.username;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  useEffect(() => {
    if (userData === null) {
      navigate("/login");
    }
  }, [userData, navigate]);
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
          <>
            <ExitButtonSvg onClick={Toggle}>
              <use href={`${sprite}#icon-exit`}></use>
            </ExitButtonSvg>
            <ModalLogout
              show={modal}
              close={Toggle}
              handleLogout={handleLogout}
            />
          </>
        </LogoutHeader>
      </ContainerHeader>
    </>
  );
};

export default Header;
