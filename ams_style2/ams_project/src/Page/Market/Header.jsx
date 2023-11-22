import React from "react";
import Bg_header from "../../assets/header_bg_learnMore.png";
import "./Market.css";
import { useTranslation } from "react-i18next"
const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="header relative flex flex-col items-center justify-center h-[auto]  rounded-b-[30%] overflow-hidden">
        <img
          src={Bg_header}
          className="w-full absolute z-[-1] object-contain flex"
        />
        <div className="flex flex-col justify-center items-center gap-6 ">
          <div className="flex">
            <div className=" market text-white   mr-[10px] font-light ">{t("Market.p01")}</div>
            &nbsp;
            <div className="text-white  market   font-bold">{t("Market.p02")}</div>
          </div>

          <div className="Pricing_header2">{t("Market.p03")}
          
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
