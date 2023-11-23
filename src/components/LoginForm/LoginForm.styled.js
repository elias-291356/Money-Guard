import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {

    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
// export const FormLoginWrap = styled.div`
//   background-color: transparent;
// `;
export const InputForm = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--form-color);
  width:280px;
`;
export const FormLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
 

`;
export const WrapEmail = styled.div`
  display: flex;
  column-gap: 18px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--form-color);
`;
export const WrapPassword = styled.div`
  display: flex;
  column-gap: 18px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--form-color);
`;
export const WrapButtonsForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 40px;
`;
export const AccentButton = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  background: var(--button-gradient);
  color: var(--text-color);
  box-shadow: var(--button-shadow);
  font-style: normal;
  font-weight: 400;
  border-radius: 20px;
  height: 50px;
  font-size: 18px;
  letter-spacing: 1.8px;

`;
export const NoAccentButton = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  background: var(--bcg-button);
  color: var(--text-button);
  box-shadow: var(--button-shadow);
  font-style: normal;
  font-weight: 400;
  border-radius: 20px;
  height: 50px;
  font-size: 18px;
  letter-spacing: 1.8px;

`;
export const LogoWrap = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`;
export const Logo = styled.div`

`;
export const AppNameH1 = styled.h1`
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
