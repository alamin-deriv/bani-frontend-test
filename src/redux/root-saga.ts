import { all, call } from "redux-saga/effects";
import { MoviesSagas } from "./paymentDetails/sagas";

export default function* rootSaga() {
  yield all([call(MoviesSagas)]);
}
