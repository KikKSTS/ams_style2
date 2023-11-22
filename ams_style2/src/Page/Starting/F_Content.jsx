import React from "react";
import "./Starting.css";
import { Link } from "react-router-dom";
// img
import GPUimg from "../../assets/gpu.png";
import ASIC from "../../assets/asic.png";
import { handleMouseClick } from "../../components/Function/Cilck"
import { useTranslation } from "react-i18next";

const F_Content = () => {
  const [t ,i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  return (
    <div className="learnmore_content1">
      <div className="headerContent">
        <span className="text-black font-[300] mr-[10px]">{t("Starting.header_contain1_1")}</span>
        <span className="text-[#42B8FB] font-[700]">{t("Starting.header_contain1_2")}</span>
      </div>

      <div className="sm:h-[50px] h-[10px]"></div>

      <div className="contain1_detail">
        <div>
          <div className="sub_contain1_detail">
            <img src={GPUimg} className="w-full" alt="" />
          </div>
          <div className="h-[30px]"></div>
          <Link to="/gpu"
          onClick={handleMouseClick}>
          <div className="sub_contain1_detail_btn">{t("Button.Learnmore")}</div>
          </Link>
        </div>
        <div className="w-[30px]"></div>
        <div>
          <div className="sub_contain1_detail">
            <img src={ASIC} className="w-full" alt="" />
          </div>
          <div className="h-[30px]"></div>
          <Link to="/mining"
          onClick={handleMouseClick}>
        
          <div className="sub_contain1_detail_btn">{t("Button.Learnmore")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default F_Content;
