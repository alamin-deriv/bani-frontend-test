import { all, call } from 'redux-saga/effects';
import { onFetchPaymentDetailsStart } from "./fetchPaymentDetails";


export function* MoviesSagas() {
  yield all([

    call(onFetchPaymentDetailsStart),

  ]);
};
