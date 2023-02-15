import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DirectPaymentDetails from "./pages/direct_payment_details";

const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/comhub/direct_payment_page_details/:page_ref" element={<DirectPaymentDetails />} />
    </Routes>
  );
};

export default App;
