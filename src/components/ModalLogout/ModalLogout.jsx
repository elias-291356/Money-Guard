import React from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "react-responsive";
import sprite from "../../images/sprite.svg";
import {
  AccentButtonModal,
  BrandName,
  ModalButtons,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalWrapContent,
  NoAccentButtonModal,
  SvgModalTablet,
  WrapLogoTablet,
  WrapTitle,
} from "./ModalLogoutStyled";

const ModalLogout = ({ show, close, handleLogout }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return createPortal(
    <>
      <ModalContainer show={show}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalWrapContent>
            {isTablet && (
              <WrapLogoTablet>
                <SvgModalTablet>
                  <use href={`${sprite}#icon-logo`}></use>
                </SvgModalTablet>
                <BrandName>Money Guard</BrandName>
              </WrapLogoTablet>
            )}
            <WrapTitle>
              <ModalTitle>Are you sure you want to log out?</ModalTitle>
            </WrapTitle>
            <ModalButtons>
              <AccentButtonModal onClick={handleLogout}>
                logout
              </AccentButtonModal>
              <NoAccentButtonModal onClick={() => close()}>
                Cancel
              </NoAccentButtonModal>
            </ModalButtons>
          </ModalWrapContent>
        </ModalContent>
      </ModalContainer>
    </>,
    document.getElementById("modal")
  );
};

export default ModalLogout;
