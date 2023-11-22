import React from "react";
// img
import video_icon from "../../assets/icon/video_earnmore.png";
import { useTranslation } from "react-i18next"
const S_Content = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="EarnMore_Con2">
      <div className="Contain1">{t("EarnMore.span03")}</div>
      <div className="h-[20px]"></div>
      <div className="Contain2">
      {t("EarnMore.span04")}
       
      </div>
      <div className="h-[30px]"></div>
      <div className="Contain3">
        <div className="Contain3_box">
          <div className="Contain3_box_video">
            <img src={video_icon} className="w-[80px]" alt="" />
          </div>
          <div className="Contain3_box_desp">
            <div className="h-[15px]"></div>
            <div className="desp_name">
              <span className="font-[400]">By</span> The Hobbyist Miner
            </div>
            <div className="h-[15px]"></div>
            <div className="desp_sup">
              Are you Mining to the Wrong Bitcoin Mining Pool?
            </div>
          </div>
        </div>
        <div className="Contain3_box">
          <div className="Contain3_box_video">
            <img src={video_icon} className="w-[80px]" alt="" />
          </div>
          <div className="Contain3_box_desp">
            <div className="h-[15px]"></div>
            <div className="desp_name">
              <span className="font-[400]">By</span> VoskCoin
            </div>
            <div className="h-[15px]"></div>
            <div className="desp_sup">
              Here's How To Make More Money Mining using NiceHash!
            </div>
          </div>
        </div>
        <div className="Contain3_box">
          <div className="Contain3_box_video">
            <img src={video_icon} className="w-[80px]" alt="" />
          </div>
          <div className="Contain3_box_desp">
            <div className="h-[15px]"></div>
            <div className="desp_name">
              <span className="font-[400]">By</span> The Hobbyist Miner
            </div>
            <div className="h-[15px]"></div>
            <div className="desp_sup">
              Which BITCOIN Mining Pool is the Most Profitable? F2Pool, Luxor or
              Nicehash
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default S_Content;
