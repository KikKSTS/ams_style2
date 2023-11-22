import React from "react";
import { useTranslation } from "react-i18next";

const What_Mining = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="bg-[#9bedff28] py-[100px]">
      <div className="w-[80%] mx-auto text-center">
        <div className="sm:text-[48px] text-[24px] text-[#42B8FB] font-[700]">
        {t("WhatMining.p01")}
        </div>
        <div className="sm:text-[48px] text-[24px] text-[#3A3939] font-[700]">
        {t("WhatMining.p02")}
        </div>
        <div className="sm:text-[18px] text-[15px] text-[#3A3939] font-[400] my-[60px]">
        {t("WhatMining.p03")}
        </div>
        <div>
          <iframe
            className="mx-auto sm:w-[600px] sm:h-[315px] w-[90%]"
            src="https://www.youtube.com/embed/GmOzih6I1zs?si=1lgevxjO9ZpxhcH3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default What_Mining;
