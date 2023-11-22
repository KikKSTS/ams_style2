
import React from 'react';
import card01 from "../../assets/product/card-01.png";
import gpu01 from "../../assets/product/cpu-01.png";
import product01 from "../../assets/product/product-02.png";
import { useTranslation } from "react-i18next";

const CardGpu = () => {
  const [t, i18n] = useTranslation("global");
  return (

    <div className="flex flex-col sm:flex-row bg-white h-[380px] sm:w-[800px] w-full justify-center items-center gap-10 rounded-[5px] shadow">
      <div className="flex flex-col gap-12 sm:w-[310px]  h-[330px] items-center justify-center ">
        <div className="flex flex-col items-center" >
          <span className="text-[20px] font-bold">{t("CPU_GPU.headContain3_3")}</span>
          <span className="text-[14px] font-normal">For CPU & GPU only</span>
        </div>
        <div className="flex items-center gap-10 ">
          <img className="w-[70px] h-[50px] " src={card01} alt="" />
          <img className="w-[70px] h-[50px] " src={gpu01} alt="" />
        </div>
      </div>
      <span className="sm:flex hidden line w-[14.44px]  text-neutral-400 text-[20px] font-normal ">
        or

      </span>

      {/* right */}
      <div className="flex flex-col gap-12 sm:w-[310px] h-[330px] items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-[20px] font-bold">{t("CPU_GPU.headContain3_4")}</span>
          <span className="text-[14px] font-normal">CPU, GPU & ASIC</span>
        </div>
        <div className="flex items-center gap-10">
          <img className="w-[70px] h-[50px] " src={product01} alt="" />
          <img className="w-[70px] h-[50px] " src={card01} alt="" />
          <img className="w-[70px] h-[50px] " src={gpu01} alt="" />
        </div>
      </div>
    </div>

  );
}

export default CardGpu;
