import React from "react";
import './Earnmore.css'
// img
import BannerASIC from "../../assets/Banner_ASIC.png";
import Earn_icon from "../../assets/icon_ASIC_b1.png";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="Banner_Earnmore">
      <img src={BannerASIC} className="absolute z-[-1] h-full w-full" alt="" />
      <img src={Earn_icon} className="sm:w-[65px] w-[45px]" alt="" />
      {localStorage.getItem("Lang") === "US" ? (
        <div className="Banner_desp1">
          <span className="mr-[10px]">{t("EarnMore.p01")}</span>
          <span className="text-[#42B8FB]">{t("EarnMore.p02")}</span>
        </div>
      ) : (
        <div className="Banner_desp1">
          <span>{t("EarnMore.p001")}</span>
          <span className="text-[#42B8FB]">{t("EarnMore.p002")}</span>
          <span>{t("EarnMore.p003")}</span>
        </div>
        )}
      <div className="h-[15px]"></div>
      <div className="Banner_desp2">{t("EarnMore.span01")}</div>
    </div>
  );
};

export default Banner;
