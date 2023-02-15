import { put, takeLatest } from "redux-saga/effects";
import paymentDetailsActionTypes from "../types";
import {
  fetchPaymentDetailsSuccess,
  fetchPaymentDetailsFail,
} from "../actions";
import httpClient from "../../../utils/http-client";

interface responseProps {
  data: any;
}

export function* fetchPaymentDetails({page_ref}: {page_ref:string}): Iterable<any> {
  try {
    // @ts-ignore
    const response: responseProps = yield httpClient.get(`direct_payment_page_details/${page_ref}`);
    
    yield put(fetchPaymentDetailsSuccess(response?.data?.data));
  } catch (error) {
    yield put(fetchPaymentDetailsFail(true));
  }
}

export function* onFetchPaymentDetailsStart() {
  yield takeLatest(
    // @ts-ignore
    paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_START,
    fetchPaymentDetails
  );
}
