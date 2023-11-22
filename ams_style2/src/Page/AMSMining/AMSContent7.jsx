import React from "react";
import vs from "../../assets/AMSMining/vs..png";
import amspool from "../../assets/AMSMining/amspool.png";
import pool from "../../assets/AMSMining/pool.png";
import { useTranslation } from "react-i18next";
const AMSContent7 = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="py-12 w-full ">
      <div className="w-full flex flex-col justify-center items-center gap-7">
        <div className="flex text-neutral-700  sm:text-[48px] text-[30px] font-bold">
          <span>{t("AMSMining.p016")}</span> &nbsp;
          <span className="text-sky-400">{t("AMSMining.p017")}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="sm:text-[20px] text-[10px]">{t("AMSMining.p018")}</span>
          <span className="sm:text-[20px] text-[10px]">{t("AMSMining.p019")}</span>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="sm:w-[377px] h-[515px] relative flex flex-col items-center" >
            <img
              className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
              src={pool}
            />
            <div className="flex flex-row gap-2 mt-4">
              <div className="text-center text-neutral-700 text-2xl font-bold ">
                {t("AMSMining.p020")}
              </div>
              <div className="text-center text-sky-400 text-2xl font-bold">
                {t("AMSMining.p021")}
              </div>
            </div>
            <div className="justify-center items-center mt-4">
              <div className="text-center text-neutral-700 text-[16px]">
                {t("AMSMining.p0020")}
              </div>
            </div>
          </div>
          <div className="w-[90px] sm:h-[515px] h-[100px]">
            <div className="flex justify-center items-center sm:h-[300px] h-[0px]">
              <img src={vs} alt="icon vs" />
            </div>
          </div>

          <div className="sm:w-[377px] h-[515px] relative flex flex-col items-center" >
            <img
              className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
              src={amspool}
            />
            <div className="flex flex-row gap-2 mt-4">
              <div className="text-center text-neutral-700 text-2xl font-bold ">
                {t("AMSMining.p022")}
              </div>
              <div className="text-center text-sky-400 text-2xl font-bold">
                {t("AMSMining.p023")}
              </div>
            </div>
            <div className="justify-center items-center mt-4">
              <div className="text-center text-neutral-700 text-[16px]">
                {t("AMSMining.p0022")}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AMSContent7;
