import React from "react";
import { useTranslation } from "react-i18next";
import AMS_System from "../../assets/AMS_System.png";
import AMS_System_CN from "../../assets/AMS_System_CN.png";
const Howdoes = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="flex flex-col justify-center items-center py-8 w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center font-bold ">
        <span className="sm:text-[48px] text-[30px] font-bold">{t("AmsSpeed.span021")} </span>&nbsp;
        <span className="text-sky-400 sm:text-[48px] text-[30px] font-bold">{t("AmsSpeed.span022")}</span>
      </div>
      <div className="my-10 w-full flex  flex-col justify-center items-center">
        <div className="sm:w-[536px] w-full h-[120px] text-center text-neutral-400 sm:text-base text-[10px] font-normal  leading-7">
          {t("AmsSpeed.span023")}
        </div>
        <div className="sm:w-[536px] w-full h-[120px] text-center text-neutral-400 sm:text-base text-[10px] font-normal  leading-7">
          {t("AmsSpeed.span024")}
        </div>
      </div>

      <div className="flex justify-center">
        {localStorage.getItem("Lang") === "US" ? (
          <img src={AMS_System} className="sm:w-[60%] w-[90%]" alt="" />
        ) : (
          <img src={AMS_System_CN} className="sm:w-[60%] w-[90%]" alt="" />
        )}
      </div>
    </div>
  );
};

export default Howdoes;
