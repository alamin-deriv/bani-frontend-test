import React from "react";
import { Container, PayButtonContainer, QuantityBtnContainer } from "./Button.styled";

export const QuantityButton = ({ icon }) => {
  return (
    <QuantityBtnContainer>
      <img src={icon} />
    </QuantityBtnContainer>
  );
};

export const PayButton = () => {
  return <PayButtonContainer>Pay (48,000)</PayButtonContainer>;
};
