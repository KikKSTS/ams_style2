import React from "react";
import "./Market.css";
import Features01 from "../../assets/Hardware/ft01.png"
import Features02 from "../../assets/Hardware/ft02.png"
import Features03 from "../../assets/Hardware/ft03.png"
import Features04 from "../../assets/Hardware/ft04.png"
import Features05 from "../../assets/Hardware/ft05.png"
import Features06 from "../../assets/Hardware/ft06.png"
import { useTranslation } from "react-i18next"
const Container02 = () => {
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-neutral-700 text-[40px] font-light">
        <span>{t("Market.p06")}</span>
      </div>
      <div className="Market_detail py-5">
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features01} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f01")}
           
            </div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f02")}
           
            </div>
         
          </div>
        </div>
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features02} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f03")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f04")}
           
            </div>
          </div>
        </div>
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features03} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f05")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f06")}
           
            </div>
          </div>
        </div>
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features04} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f07")}
            
            </div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f08")}
            
            </div>
          </div>
        </div>
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features05} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f09")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f010")}
            
            </div>
          </div>
        </div>
        <div className="Market_detail_box">
          <div className="Marketdesp_box justify-center items-center h-[350px]">
            <img src={Features06} className="w-[100px]" alt="" />
            <div className="h-[25px]"></div>
            <div className="text-base font-bold">{t("Market.f011")}</div>
            <div className="h-[25px]"></div>
            <div className="font-[400] text-[14px]">{t("Market.f012")}
            
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3  w-[80%] justify-center items-center">
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
      
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
    
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
     
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
     
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
       
        <div className="w-[370px] h-[300px] bg-slate-100 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[300px] gap-8">
         
            <img src="" alt="" />
            <span>Start with 0.001 BTC ($34.63)</span>
            <div className="flex flex-col gap-1">
              <span>The minimum order price for every</span>
              <span>algorithm is 0.001 BTC.</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Container02;
