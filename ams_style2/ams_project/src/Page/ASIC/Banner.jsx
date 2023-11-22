import React from "react";
import './ASIC.css'
import BannerASIC from "../../assets/Banner_ASIC.png";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [t, i18n] = useTranslation("global");
  const backgroundStyle = {
    backgroundImage: `url(${BannerASIC})`,
    backgroundSize: "cover", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="Banner_ASIC " style={backgroundStyle}>
     
      {localStorage.getItem("Lang") === "US" ? (
      <div className=" py-4">
        <div className="Banner_desp1">

        <span>{t("ASIC.p01")}</span>
        <span className="text-[#42B8FB]">{t("ASIC.p02")}</span>
        </div>
      </div>
       ) : (
      <div className="Banner_desp1">
        <span>{t("ASIC.p01")}</span>
        <span className="text-[#42B8FB]">{t("ASIC.p02")}</span>
        <span>{t("ASIC.p003")}</span>
      </div>
       )}
      
      <div className="Banner_desp2 py-3">
      {t("ASIC.p03")}
      
      </div>
    </div>
  );
};

export default Banner;
