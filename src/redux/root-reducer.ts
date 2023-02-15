import { combineReducers } from "redux";
import paymentDetailsReducer from "./paymentDetails/reducer";


const rootReducer = combineReducers({
  paymentDetails: paymentDetailsReducer,
});

export default rootReducer;
