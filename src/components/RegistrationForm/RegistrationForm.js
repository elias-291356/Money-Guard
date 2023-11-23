

import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    max-width: 768px;
    width: 533px;
    min-height:570px;

    border-radius: 8px;
    backdrop-filter: blur(50px);
    box-shadow: var(--modal-shadow);
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;




export const FormLoginWrapRegister = styled.div`
@media screen and (min-width: 320px) {
   width: 280px;
     display:flex;
   flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    width: 410px;
   display:flex;
   flex-direction: column;

  }

`;

export const WrapName = styled.div`
  display: flex;
  column-gap: 18px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--form-color);
`;
export const InputesWrapperRegister = styled.div`
  display: flex;
  flex-direction: column;
  row-gap:40px;
`;