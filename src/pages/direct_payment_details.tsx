import React, {useEffect} from 'react';
import "./../App.css";
import DescriptionCard, {
  CustomerDetailsCard,
  PaymentCard,
  PaymentCard2,
} from "./../components/DescriptionCard"
import {Loader} from "./../components/Loader"
import { SecurityImgContainer, Container } from "./direct_payment.styled";
import Security from "../assets/security.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, PaymentDetailsSelect } from '../redux/paymentDetails/selectors';
import { fetchPaymentDetailsStart } from '../redux/paymentDetails/actions';
// @ts-ignore
import { createForm } from 'rc-form';

import { useParams } from 'react-router-dom';



type DirectPaymentDetailsProps = {
  form: any;
}

const DirectPaymentDetails = ({form}:DirectPaymentDetailsProps) => {
  const dispatch = useDispatch();
  const { page_ref } = useParams();

 const { validateFields } = form;
  

  const PaymentDetails = useSelector(PaymentDetailsSelect);
  const isLoading = useSelector(selectIsLoading);
  

  useEffect(() => {
    if (page_ref) {
      dispatch(fetchPaymentDetailsStart(page_ref));
    }
    
  }, [dispatch, page_ref]);

  const handleSubmit = (amount: number | string, count?: number) => {
    validateFields((err: any, values: any) => {
      if (!err) {

      }
    });
  };
  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container className="App">
            <div>
              <DescriptionCard />
              <CustomerDetailsCard form={form} />
            </div>
            {PaymentDetails.page_amount > 0 ? (
              <PaymentCard
                amount={PaymentDetails.page_amount}
                handleSubmit={handleSubmit}
              />
            ) : (
              <PaymentCard2
                amount={PaymentDetails.page_amount}
                handleSubmit={handleSubmit}
              />
            )}
          </Container>
          <SecurityImgContainer>
            <img src={Security} alt="security" />
            <p>
              Do you have any questions, visit our website{" "}
              <a href="https://bani.africa/">bani.africa</a>
            </p>
          </SecurityImgContainer>
        </>
      )}
    </>
  );
};
export default createForm()(DirectPaymentDetails);

