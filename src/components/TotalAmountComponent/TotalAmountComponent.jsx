import React from "react";
import { Amount, AmountContainer, Container, CurrencyContainer } from "./TotalAmountComponent.styled.js";

const TotalAmountComponent = () => {
  return (
    <Container>
      <CurrencyContainer>
        <p>NGN</p>
      </CurrencyContainer>
        <AmountContainer>
          <p>48,000</p>
        </AmountContainer>
    </Container>
  );
};

export default TotalAmountComponent;
