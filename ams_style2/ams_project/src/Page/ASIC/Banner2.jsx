import React from "react";
import "./ASIC.css";
// img
import { Link } from "react-router-dom";
import BannerASIC from "../../assets/Banner_ASIC.png";
import { useTranslation } from "react-i18next";
const Banner2 = () => {
  const handleMouseClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [t, i18n] = useTranslation("global");
  const backgroundStyle = {
    backgroundImage: `url(${BannerASIC})`,
    backgroundSize: "cover", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div className="Banner_ASIC2" style={backgroundStyle}>
       
        {localStorage.getItem("Lang") === "US" ? (
        <div className="ASICbanner_desp1 py-3">
          <span>{t("ASIC.p018")}</span>
          <span className="text-[#42B8FB]">{t("ASIC.p019")}</span>
        </div>
        ):(
        <div className="ASICbanner_desp1 py-3">
          <span>{t("ASIC.p018")}</span>
          <span className="text-[#42B8FB]">{t("ASIC.p019")}</span>
          <span >{t("ASIC.p0019")}</span>
        </div>
        )}
    
        <div className="ASICbanner_desp2 py-3 ">
        {t("ASIC.p020")}
       
        </div>
       <div className="py-3">
       <Link to="/earn" onClick={handleMouseClick}>
          <div className="ASICbanner_btn"> {t("Button.Learnmore")}</div>
        </Link>
       </div>
      
      </div>
      <div className="h-[70px]"></div>
    </>
  );
};

export default Banner2;
