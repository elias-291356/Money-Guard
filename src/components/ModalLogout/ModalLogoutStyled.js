import styled from "styled-components";

// export const ContainerHeader = styled.header`
//   @media screen and (min-width: 320px) {

//   }

//   @media screen and (min-width: 768px) {

//   }

//   @media screen and (min-width: 1280px) {

//   }
// `;

export const ModalContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding-top: 80px;
    backdrop-filter: blur(5px);
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  background: linear-gradient(220deg, rgba(109, 84, 235, 1), rgb(75, 21, 110));
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 447px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
`;
export const ModalWrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
  height: 100%;
  @media screen and (min-width: 320px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    row-gap: 52px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--text-color);
  width: 214px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const SvgModalTablet = styled.svg`
  width: 36px;
  height: 36px;
`;
export const WrapLogoTablet = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 182px;
  height: 76px;
`;
export const BrandName = styled.h2`
  font-size: 26.963px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--text-color);
`;

export const AccentButtonModal = styled.button`
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
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const NoAccentButtonModal = styled.button`
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
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
