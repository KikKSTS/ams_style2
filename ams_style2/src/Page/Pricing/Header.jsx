import React from "react";
import Bg_header from "../../assets/header_bg_learnMore.png";
import "./Pricing.css";
import { useTranslation } from "react-i18next"
const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className=" mt-10 header relative flex flex-col items-center justify-center h-[auto]  rounded-b-[30%] overflow-hidden">
      <img src={Bg_header} className="w-full absolute z-[-1] object-contain" />
      <div className="Pricing_header1"> {t("Price.p01")} </div>
      <div className="Pricing_header2 w-[90%] p-4">
      {t("Price.p02")}
      </div>
    </div>
  );
};

export default Header;
