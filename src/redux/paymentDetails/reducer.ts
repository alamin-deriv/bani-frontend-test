import { persistReducer } from "redux-persist";
import storage from "localforage";
import paymentDetailsActionTypes from "./types";

const INITIAL_STATE = {
  isLoading: false,
  paymentDetails: {}
};

function paymentDetailsReducer(state = INITIAL_STATE, { type, payload }:{type: string, payload: any }) {
  switch (type) {
    case paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };

    case paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paymentDetails: payload,
      };
    case paymentDetailsActionTypes.FETCH_PAYMENT_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
}

const persistConfig = {
  key: "paymentDetails",
  storage,
  blacklist: [
    "error",
    "isLoading",
  ],
};

export default persistReducer(persistConfig, paymentDetailsReducer);
