import React from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-[70%] mx-auto ">
      <div className="faq_header">{t("FAQ.p01")}</div>
      <div className="faq_desp">
        <div className="font-[700]">{t("FAQ.p02")}</div>
        <div>{t("FAQ.p03")}</div>
        <div className="h-[32px]"></div>
      </div>
      <div className="faq_desp">
        <div className="font-[700]">{t("FAQ.p04")}</div>
        <div>{t("FAQ.p05")}</div>
        <div className="h-[32px]"></div>
      </div>
      <div className="faq_desp">
        <div className="font-[700]">{t("FAQ.p06")}</div>
        <div>{t("FAQ.p07")}</div>
        <div className="h-[32px]"></div>
      </div>
      <div className="faq_desp">
        <div className="font-[700]">{t("FAQ.p08")}</div>
        <div>{t("FAQ.p09")}</div>
        <div className="h-[32px]"></div>
      </div>
      <div className="faq_desp">
        <div className="font-[700]">{t("FAQ.p10")}</div>
        <div>{t("FAQ.p11")}</div>
        <div className="h-[32px]"></div>
      </div>
      <div className="h-[40px]"></div>
    </div>
  );
};

export default Faq;
