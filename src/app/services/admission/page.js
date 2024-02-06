"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import AdmissionMgt from "@/components/Services/ServiceDetails/AdmissionMgt/AdmissionMgt";

function Admission() {
  return (
    <>
      <Provider store={store}>
        <AdmissionMgt />
      </Provider>
    </>
  );
}

export default Admission;
