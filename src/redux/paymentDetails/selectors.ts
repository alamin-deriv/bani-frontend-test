import { createSelector } from "reselect";

const selectPaymentDetails = (state: { paymentDetails: any; }) => state.paymentDetails;


export const selectIsLoading = createSelector(
  [selectPaymentDetails],
  (movies) => movies.isLoading
);

export const PaymentDetailsSelect = createSelector(
  [selectPaymentDetails],
  (movies) => movies.paymentDetails
);



