import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 44px;
  border: 0.5px solid #e1e1e1;
  border-radius: 8px;
  align-items: center;
`;

export const CurrencyContainer = styled.div`
  width: 52px;
  background: #ecebf4;
  display: flex;
  align-items: center;
  color: black;
  height: 44px;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  p {
    font-size: 16px;
    color: black;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 377px;
  height: 44px;
  p {
    padding: 0;
    color: black;
  }
`;

export const AmountInput = styled.input`
  border: 0.5px solid #e1e1e1;
  height: 44px;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 8px;
  font-size: 16px;
  width: ${({ width }) => width};

  ::placeholder {
    color: #c1c1c1;
  }
`;
