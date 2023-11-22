import React from "react";
import "./Starting.css";
import {useTranslation} from "react-i18next"


// img
import iconBox1 from "../../assets/icon_contain3_b1.png";
import iconBox2 from "../../assets/icon_contain3_b2.png";
import iconBox3 from "../../assets/icon_contain3_b3.png";
import iconBox4 from "../../assets/icon_contain3_b4.png";
import iconBox5 from "../../assets/icon_contain3_b5.png";
import iconBox6 from "../../assets/icon_contain3_b6.png";

const Third_Content = () => {
  const [t ,i18n] = useTranslation("global");

  return (
    <div className="learnmore_content1">
      <div className="headerContent">
        <span className="text-black font-[300] mr-[10px]">
        {t("Starting.header_contain3_1")}
          {" "}
        </span>
        <span className="text-[#42B8FB] font-[700]">{t("Starting.header_contain3_2")}</span>
      </div>

      <div className="h-[30px]"></div>

      <div className="contain3_detail">
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox1} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box1")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox2} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box2")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox3} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box3")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox4} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box4")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox5} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box5")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
        <div className="contain3_detail_box">
          <div className="desp_box">
            <div className="h-[25px]"></div>
            <img src={iconBox6} className="w-[100px]" alt="" />
            <div className="h-[40px]"></div>
            <div>{t("Starting.contain3_box6")}</div>
          </div>
          <div className="underline_box"></div>
        </div>
      </div>
    </div>
  );
};

export default Third_Content;
