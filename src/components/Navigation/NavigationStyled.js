
import styled from "styled-components";

export const ContainerNavigation = styled.section`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;

  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    max-width: 768px;
    margin-right: auto;
    margin-left: auto;

 
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;

  }
`;


export const UlNav = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
padding-left: 0px;
`;
export const LiNav = styled.li`
height:44px;
width: 44px;


`;
export const NavigationSvg = styled.svg`
height:44px;
width: 44px;
fill: var(--form-color);
cursor: pointer;




`;