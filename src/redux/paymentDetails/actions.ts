import paymentDetailsActionTypes from "./types";


export const fetchPaymentDetailsStart = (page_ref: string) => ({
  type: paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_START, page_ref,
});

export const fetchPaymentDetailsSuccess = (data:any) => ({
  type: paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_SUCCESS,
  payload: data,
});

export const fetchPaymentDetailsFail = (error:any) => ({
  type: paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_FAIL,
  payload: error,
});





