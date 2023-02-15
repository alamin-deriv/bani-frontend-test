import React from "react";
import {
  AmountContainer,
  Container,
  CurrencyContainer,
  AmountInput,
} from "./TotalAmountComponent.styled";
import {  numberWithCommas } from "./../../utils/utils";


const TotalAmountComponent = ({
  amount,
  setInputAmount,
}: {
  amount: number;
  setInputAmount: (amount: number) => void;
}) => {
  return (
    <Container>
      <CurrencyContainer>
        <p>NGN</p>
      </CurrencyContainer>
      {amount > 0 ? (
        <AmountContainer>
          <p>{numberWithCommas(amount)}</p>
        </AmountContainer>
      ) : (
        <AmountInput
          onChange={(e) => setInputAmount(Number(e.target.value))}
          width="100%"
          type="number"
        />
      )}
    </Container>
  );
};

export default TotalAmountComponent;
