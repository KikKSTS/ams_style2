import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import global_en from "./translations/en/global.json";
import global_cn from "./translations/cn/global.json";

import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

if(localStorage.getItem("Lang") == null){
  localStorage.setItem("Lang","US")
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("Lang"),
  resources: {
    US: {
      global: global_en,
    },
    CN: {
      global: global_cn,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </NextUIProvider>
);
