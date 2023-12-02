
import styled from "styled-components";

export const ContainerHeader = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    background: linear-gradient(270deg, #2E1746 3.2%, #2E225F 99.98%);
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
export const ContainerLogo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 86px;
`
export const LogoNameHeader = styled.h1`
  font-family: Poppins,sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const SvgLogoHeader = styled.svg`
width:17px;
height: 17px;

`;
export const LogoutHeader = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: right;
    align-items: center;
    width: 80px;

`;
export const UserName = styled.p`
/* text-align: right; */
font-family: Poppins,sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: var(--form-color);
`;
export const ExitButtonSvg = styled.svg`
width:18px;
height: 18px;
cursor: pointer;
`;