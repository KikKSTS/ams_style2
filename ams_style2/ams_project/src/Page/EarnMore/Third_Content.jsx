import React from "react";
// img
import earnmore_con3_1 from "../../assets/earnmore_contain3_1.png";
import earnmore_con3_2 from "../../assets/earnmore_contain3_2.jpg";
import { useTranslation } from "react-i18next"
const Third_Content = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="EarnMore_Con3 ">
      <div className="Contain1"> {t("EarnMore.span05")}</div>
      <div className="h-[20px]"></div>
      <div className="Contain2">{t("EarnMore.span06")}
      
      </div>
      <div className="h-[32px]"></div>
      <div>
        <img src={earnmore_con3_1} className="w-[620px] mx-auto" alt="" />
      </div>
      <div className="w-[620px] text-center mx-auto">VS</div>
      <div>
        <img src={earnmore_con3_2} className="w-[620px] mx-auto" alt="" />
      </div>
      <div className="h-[50px]"></div>
      <div className="Contain3">{t("EarnMore.span07")}
       
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Third_Content;
