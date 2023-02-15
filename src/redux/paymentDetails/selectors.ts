import { createSelector } from "reselect";

const selectPaymentDetails = (state: { paymentDetails: any; }) => state.paymentDetails;


export const selectIsLoading = createSelector(
  [selectPaymentDetails],
  (paymentDetails) => paymentDetails.isLoading
);

export const PaymentDetailsSelect = createSelector(
  [selectPaymentDetails],
  (paymentDetails) => paymentDetails.paymentDetails
);

export const SelectError = createSelector(
  [selectPaymentDetails],
  (paymentDetails) => paymentDetails.error,
);



