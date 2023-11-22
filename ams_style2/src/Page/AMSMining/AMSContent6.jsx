import React from "react";
import { useTranslation } from "react-i18next";
const AMSContent6 = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full bg-[#FAFAFA] text-center  ">
      <div className="gap-2 flex items-center justify-center pt-10">
        <span className="text-[#3A3939]  sm:text-[48px] text-[30px]  font-bold ">
          {t("AMSMining.p011")}
        </span>
        <span className="text-[#42B8FB]  sm:text-[48px] text-[30px]  font-bold ">
         
          {t("AMSMining.p012")}
        </span>
      </div>

      <div className="mt-4 flex  justify-center items-center">
        <span className="text-[#3A3939] sm:w-[750px]  w-full sm:text-[14px] text-[10px]"> 
        {t("AMSMining.p013")}
       
        </span>
      </div>

      <div className="mt-12 flex flex-col">
        <span className="text-[#42B8FB] sm:text-[24px] text-[16px] font-bold"> {t("AMSMining.p014")}
         
        </span>
        <span className="text-[#42B8FB] sm:text-[24px] text-[16px] font-bold"> {t("AMSMining.p015")}
          
        </span>
      </div>
    </div>
  );
};

export default AMSContent6;
