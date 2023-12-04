import React from "react";
import {
  AccentButtonDelete,
  Container,
  Edit,
  SvgAndPencilWrap,
  SvgPencil,
  Table,
  TableItem,
  TransactionsOperationWrap,
} from "./TransactionsItemStyled";
import sprite from "../../images/sprite.svg";

const TransactionsItem = () => {
  return (
    <>
      <Container>
        <Table>
          <TableItem>Date</TableItem>
          <TableItem>Type</TableItem>
          <TableItem>Category</TableItem>
          <TableItem>Comment</TableItem>
          <TableItem>Sum</TableItem>
          <TransactionsOperationWrap>
            <div>
              <AccentButtonDelete type="button">Delete</AccentButtonDelete>
            </div>
            <SvgAndPencilWrap>
              <SvgPencil>
                <use href={`${sprite}#icon-edit`}></use>
              </SvgPencil>
              <Edit>Edit</Edit>
            </SvgAndPencilWrap>
          </TransactionsOperationWrap>
        </Table>
      </Container>
    </>
  );
};

export default TransactionsItem;
