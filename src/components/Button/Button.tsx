import React from "react";
import {  PayButtonContainer, QuantityBtnContainer } from "./Button.styled";
import { numberWithCommas } from "./../../utils/utils";

type QuantityButtonProps = {
  icon: string;
  disabled: boolean;
  handleCount: () => void;
};

export const QuantityButton = ({
  icon,
  handleCount,
disabled
}: QuantityButtonProps) => {
  return (
    <QuantityBtnContainer disabled={disabled} onClick={handleCount}>
      <img src={icon} alt="icon" />
    </QuantityBtnContainer>
  );
};

export const PayButton = ({
  handleSubmit,
  amount,
  inputAmount,
}: {
  handleSubmit?: () => void;
  amount: number;
  inputAmount?: number | string;
}) => {
  return (
    <>
      {amount > 0 ? (
        <PayButtonContainer
          onClick={handleSubmit}
        >
          Pay ({numberWithCommas(amount)})
        </PayButtonContainer>
      ) : (
        <PayButtonContainer
          disabled={!inputAmount || inputAmount <= 0 ? true : false}
          onClick={handleSubmit}
        >
          Pay 
        </PayButtonContainer>
      )}
    </>
  );
};
