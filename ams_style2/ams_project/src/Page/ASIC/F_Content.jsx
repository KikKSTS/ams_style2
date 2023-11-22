import React from "react";
import "./ASIC.css";

// img
import ASIC_icon_b1 from "../../assets/icon_ASIC_b1.png";
import ASIC_icon_b2 from "../../assets/icon_ASIC_b2.png";
import ASIC_icon_b3 from "../../assets/icon_ASIC_b3.png";
import ASIC_icon_b4 from "../../assets/icon_ASIC_b4.png";
import ASIC_icon_b5 from "../../assets/icon_ASIC_b5.png";
import ASIC_icon_b6 from "../../assets/icon_ASIC_b6.png";
import { useTranslation } from "react-i18next";
const F_Content = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="ASIC_content">
      <div className="h-[72px]"></div>
      <div className="headerContent">
        <span className="mr-[10px]">{t("ASIC.p04")}</span>
        <span className="text-[#42B8FB]">{t("ASIC.p05")}</span>
      </div>

      <div  className="h-[30px]"></div>

      <div className="ASIC_detail">
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b1} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">{t("ASIC.p06")}
             
            </div>
            <div className="h-[25px]"></div>
           
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p07")}
       
            </div>
          </div>
        </div>
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b2} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">{t("ASIC.p08")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p09")}
       
            </div>
          </div>
        </div>
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b3} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">
            {t("ASIC.p010")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p011")}
      
            </div>
          </div>
        </div>
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b4} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">{t("ASIC.p012")}
         
            </div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p013")}
       
            </div>
          </div>
        </div>
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b5} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">{t("ASIC.p014")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p015")}
         
            </div>
          </div>
        </div>
        <div className="ASIC_detail_box">
          <div className="ASICdesp_box">
            <img src={ASIC_icon_b6} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="font-[700] text-[20px]">{t("ASIC.p016")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px] ">
            {t("ASIC.p017")}
           
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default F_Content;
