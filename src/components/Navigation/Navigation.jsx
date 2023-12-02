import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ContainerNavigation,
  UlNav,
  LiNav,
  NavigationSvg,
} from "./NavigationStyled";
import sprite from "../../images/sprite.svg";
const Navigation = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleStatistics = () => {
    navigate("/statistics");
  };
  const handleCurrency = () => {
    navigate("/currency");
  };

  return (
    <ContainerNavigation>
      <UlNav>
        <LiNav onClick={handleHome}>
          <NavigationSvg>
            <use href={`${sprite}#icon-home`}></use>
          </NavigationSvg>
        </LiNav>
        <LiNav onClick={handleStatistics}>
          <NavigationSvg>
            <use href={`${sprite}#icon-statistics`}></use>
          </NavigationSvg>
        </LiNav>
        <LiNav onClick={handleCurrency}>
          <NavigationSvg>
            <use href={`${sprite}#icon-currency`}></use>
          </NavigationSvg>
        </LiNav>
      </UlNav>
    </ContainerNavigation>
  );
};

export default Navigation;
