import React from "react";
import "./Starting.css";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"

import { handleMouseClick } from "../../components/Function/Cilck";
const S_Content = () => {
  const [t ,i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  return (
    <div className="learnmore_content1">
      <div className="headerContent1">
        <span>{t("Starting.header_contain2_0")}</span>
      </div>
      <div className="h-[25px]"></div>
      <div className="headerContent2">
        <span className="text-black font-[300] mr-[10px]">{t("Starting.header_contain2_1")}</span>
        <span className="text-[#42B8FB] font-[700]">{t("Starting.header_contain2_2")}</span>
      </div>
      <div className="h-[30px]"></div>
      <div className="flex justify-center items-center">

      <div className="headerContent3 w-[664px]  ">
        <span className="text-black font-[300] mr-[10px] text-[16px] ">
        {t("Starting.subHeader_contain2")}
        </span>
      </div>
      </div>
      <div className="h-[30px]"></div>
      <Link to='/WhatMining' onClick={handleMouseClick}>
        <div className="sub_contain1_detail_btn mx-auto">{t("Button.What_is_Mining")}</div>
      </Link>
    </div>
  );
};

export default S_Content;
