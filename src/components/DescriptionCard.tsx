import React, { useState } from "react";
import { QuantityButton, PayButton } from "./Button/Button";
import {
  Breaker,
  Container,
  CardRow,
  DescriptionContainer,
  IconsContainer,
  Input,
  QuantityRow,
  QuantityInput,
  Required,
  Row,
  Subheader,
  Select,
  TextArea,
  Icon,
  Error,
} from "./DescriptionCard.styled";
import TotalAmountComponent from "./TotalAmountComponent/TotalAmountComponent";
import Logo from "./../assets/shop.svg";
import Instagram from "./../assets/instagram.svg";
import Whatsapp from "./../assets/whatsapp.svg";
import Facebook from "./../assets/facebook.svg";
import Twitter from "./../assets/twitter.svg";
import Nig from "./../assets/Nigeria.svg";
import Add from "./../assets/add.svg";
import Minus from "./../assets/minus.svg";

const DescriptionCard = () => {
  return (
    <Container height="274px" padding="24px 16px">
      <CardRow>
        <Icon>
          <img src={Logo} alt="logo" />
        </Icon>
        <DescriptionContainer>
          <h2>Billi Design</h2>
          <a href="*">https://bani.africa/billidesign</a>
          <Subheader>Payment description</Subheader>
          <p>
            Lorem ipsum dolor sit amet consectetur. Posuere elementum adipiscing
            a tincidunt in et nisi malesuada. Tellus nunc nibh tincidunt
            tristique pellentesque nulla morbi tortor.
          </p>
        </DescriptionContainer>
      </CardRow>
      <Breaker />
      <IconsContainer>
        <img src={Instagram} alt="Instagram" />
        <img src={Whatsapp} alt="Whatsapp" />
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
      </IconsContainer>
    </Container>
  );
};

type CustomerDetailsCardProps = {
  form: any,
};
export const CustomerDetailsCard = ({ form }: CustomerDetailsCardProps) => {
  const { getFieldProps, getFieldError } = form;
  let errors;
  return (
    <Container padding="12px 16px 24px 16px">
      <h2>Customer's Details</h2>
      <Subheader>
        Your phone number<Required>*</Required>
      </Subheader>
      <Row>
        <Select width="174px">
          <option value="value-1">Nig (+234)</option>
        </Select>
        <div>
          <Input
            type="number"
            placeholder="09065012687"
            width="248px"
            error={
              (errors = getFieldError("number") ? "number is required" : null)
            }
            {...getFieldProps("number", {
              rules: [{ required: true }],
            })}
          />
          {
            (errors = getFieldError("number") && (
              <Error className="error">
                {(errors = getFieldError("number"))}
              </Error>
            ))
          }
        </div>
      </Row>
      <Subheader>
        Your Full Name<Required>*</Required>
      </Subheader>
      <Row>
        <div>
          <Input
            placeholder="First name"
            width="210px"
            error={
              (errors = getFieldError("firstname")
                ? "First Name is required"
                : null)
            }
            {...getFieldProps("firstname", {
              rules: [{ required: true }],
            })}
          />

          {
            (errors = getFieldError("firstname") && (
              <Error className="error">
                {(errors = getFieldError("firstname"))}
              </Error>
            ))
          }
        </div>
        <div>
          <Input
            placeholder="Last name"
            width="210px"
            error={
              (errors = getFieldError("lastname")
                ? "Last name is required"
                : null)
            }
            {...getFieldProps("lastname", {
              rules: [{ required: true }],
            })}
          />
          {
            (errors = getFieldError("lastname") && (
              <Error className="error">
                {(errors = getFieldError("lastname"))}
              </Error>
            ))
          }
        </div>
      </Row>

      <Subheader>
        Email Address<Required>*</Required>
      </Subheader>
      <Input
        placeholder="e.g rodney@gmail.com"
        width="100%"
        type="email"
        error={(errors = getFieldError("email") ? "email is required" : null)}
        {...getFieldProps("email", {
          rules: [{ required: true, type: "email" }],
        })}
      />
      {
        (errors = getFieldError("email") && (
          <Error className="error">{(errors = getFieldError("email"))}</Error>
        ))
      }
      <Subheader>Your Message</Subheader>
      <TextArea
        placeholder="Write a message here"
        error={(errors = getFieldError("message") ? "email is required" : null)}
        {...getFieldProps("message", {
          rules: [{ required: false }],
        })}
      />
    </Container>
  );
};

type PaymentCardProps = {
  handleSubmit: (amount: string | number, count?: number) => void;
  amount: string | number;
};

export const PaymentCard = ({ handleSubmit, amount }: PaymentCardProps) => {
  const [count, setCount] = useState(1);

  amount = count * Number(amount);

  return (
    <Container height="338px" padding="24px 16px">
      <h2>Payment for product</h2>
      <Row>
        <Subheader>Quantity</Subheader>
        <QuantityRow>
          <QuantityButton
            disabled={count === 1 ? true : false}
            handleCount={() => setCount(count - 1)}
            icon={Minus}
          />
          <QuantityInput placeholder={`${count}`} width="50px" />
          <QuantityButton
            disabled={false}
            handleCount={() => setCount(count + 1)}
            icon={Add}
          />
        </QuantityRow>
      </Row>
      <Subheader>Total</Subheader>
      <TotalAmountComponent setInputAmount={() => {}} amount={amount} />
      <PayButton
        amount={amount}
        handleSubmit={() => handleSubmit(amount, count)}
      />
    </Container>
  );
};

type PaymentCard2Props = {
  handleSubmit: (amount: string | number, count?: number) => void;
  amount: string | number;
};

export const PaymentCard2 = ({ handleSubmit, amount }: PaymentCard2Props) => {
  const [inputAmount, setInputAmount] = useState(0);
  amount = Number(amount);

  return (
    <Container height="274px" padding="24px 16px">
      <h2>Payment for product</h2>
      <Subheader>Amount</Subheader>
      <TotalAmountComponent amount={amount} setInputAmount={setInputAmount} />
      <PayButton
        inputAmount={inputAmount}
        handleSubmit={() => handleSubmit(inputAmount, 1)}
        amount={amount}
      />
    </Container>
  );
};

export default DescriptionCard;
