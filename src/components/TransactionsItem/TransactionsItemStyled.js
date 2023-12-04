import styled from "styled-components";
export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 293px;
    border: 1px solid tomato;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    width: 533px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Table = styled.ul`
  width: 280px;
`;
export const TableItem = styled.li`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--transaction-decorations);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--text-color);
`;
export const SvgPencil = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--transaction-decorations);
  fill: transparent;
`;

export const AccentButtonDelete = styled.button`
  border: none;
  outline: none;
  background: var(--button-gradient);
  color: var(--text-color);
  box-shadow: var(--button-shadow);
  font-style: normal;
  font-weight: 400;
  border-radius: 18px;
  padding: 4px 12px;
  font-size: 14px;
  height: 29px;
  letter-spacing: 1.8px;
`;
export const TransactionsOperationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 13px;
  align-items: center;
`;
export const SvgAndPencilWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4px;
`;
export const Edit = styled.p`
  display: flex;
  justify-content: space-between;
  color: var(--transaction-decorations);
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;
