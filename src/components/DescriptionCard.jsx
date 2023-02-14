import React from "react";
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
} from "./DescriptionCard.styled";
import TotalAmountComponent from "./TotalAmountComponent/TotalAmountComponent";
import Logo from "../../assets/shop.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Nig from "../../assets/Nigeria.svg";
import Add from "../../assets/add.svg";
import Minus from "../../assets/minus.svg";
const DescriptionCard = () => {
  return (
    <Container height="274px" padding="24px 16px">
      <CardRow>
        <Icon>
          <img src={Logo} />
        </Icon>
        <DescriptionContainer>
          <h2>Billi Design</h2>
          <a href="*">https://bani.africa/billidesign</a>
          <Subheader>Payment description</Subheader>
          <p>
            Lorem ipsum dolor sit amet consectetur. Posuere elementum adipiscing a tincidunt in et
            nisi malesuada. Tellus nunc nibh tincidunt tristique pellentesque nulla morbi tortor.
          </p>
        </DescriptionContainer>
      </CardRow>
      {/* <hr /> */}
      <Breaker />
      <IconsContainer>
        <img src={Instagram} />
        <img src={Whatsapp} />
        <img src={Facebook} />
        <img src={Twitter} />
      </IconsContainer>
    </Container>
  );
};

export const CustomerDetailsCard = () => {
  return (
    <Container height="486px" padding="12px 16px 24px 16px">
      <form>
        <h2>Customer's Details</h2>
        <Subheader>
          Your phone number<Required>*</Required>
        </Subheader>
        <Row>
          <Select placeholder="Nig(+234)" width="174px">
            <option value="value-1">
              <img src={Nig} />
              Nig (+234)
            </option>
          </Select>
          <Input placeholder="09065012687" width="248px" />
        </Row>
        <Subheader>
          Your Full Name<Required>*</Required>
          <Row>
            <Input placeholder="First name" width="210px" />
            <Input placeholder="Last name" width="210px" />
          </Row>
        </Subheader>
        <Subheader>
          Email Address<Required>*</Required>
        </Subheader>
        <Input placeholder="e.g rodney@gmail.com" width="100%" />
        <Subheader>Your Message</Subheader>
        <TextArea placeholder="Write a message here" />
      </form>
    </Container>
  );
};

export const PaymentCard = () => {
  return (
    <Container height="338px" padding="24px 16px">
      <h2>Payment for product</h2>
      <Row>
        <Subheader>Quantity</Subheader>
        <QuantityRow>
          <QuantityButton icon={Minus} />
          <QuantityInput placeholder="1" width="50px" />
          <QuantityButton icon={Add} />
        </QuantityRow>
      </Row>
      <Subheader>Total</Subheader>
      <TotalAmountComponent />
      <PayButton />
    </Container>
  );
};
export const PaymentCard2 = () => {
  return (
    <Container height="274px" padding="24px 16px">
      <h2>Payment for product</h2>
      <Subheader>Amount</Subheader>
      <TotalAmountComponent />
      <PayButton />
    </Container>
  );
};

export default DescriptionCard;
