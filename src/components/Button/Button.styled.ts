import styled from "styled-components";

export const QuantityBtnContainer = styled.button`
  outline: none;
  border: none;
  background: #5444f2;
  height: 40px;
  width: 40px;
  cursor: pointer ;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: #dddddd;
  }
`;

export const PayButtonContainer = styled.button`
  outline: none;
  border: none;
  background: #5444f2;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  width: 448px;
  height: 44px;
  border-radius: 8px;
  padding: 13px, 32px, 13px, 32px;
  margin-top: 40px;

  &:disabled {
    background: #dddddd;
  }
`;
