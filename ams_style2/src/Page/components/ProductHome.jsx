import React from "react";
import BitcoinHmoe from "../../assets/product/Bitcoin-Home-01.png";
import BitcoinHmo2 from "../../assets/product/product-02.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductHome = () => {
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  return (
    <div className=" flex flex-col sm:flex-row  justify-center items-center gap-4 m-14">
      {/* right */}
      <div className=" w-full">
        <div className=" sm:h-[610px] flex flex-col items-center  justify-center text-center">
          
          <img src={BitcoinHmoe}  alt="" className="sm:h-[218px] h-[180px]" />
          <div className="sm:h-[96px] sm:text-[40px] flex flex-col  text-[28px] text-center justify-center items-center my-[27px]  font-bold">
            <span>{t("ProductHome.span01")}</span>
            <span className="text-[#42B8FB]">PC, GPU & CPU</span>
          </div>
          <div className=" sm:h-[92px] sm:text-xl mb-4 flex flex-col  text-sm items-center justify-center ">
          <p>{t("ProductHome.p01")}</p>
          <p>{t("ProductHome.p02")}</p>
          </div>
          <span className="text-[#42B8FB]">{t("ProductHome.p03")}</span>
          <Link to={`${baseurl}/gpu`} > 
          <button className="sm:w-44 sm:h-10 h-8 w-32 text-sm  mt-7 border rounded-md bg-white shadow-md text-[#3A3939] font-bold">{t("Button.Learnmore")}</button>
          </Link>
        </div>
      </div>
      {/* left */}
      <div className=" w-full">
        <div className=" sm:h-[610px] flex  flex-col items-center justify-center">
          <img src={BitcoinHmo2} alt=""className="sm:h-[218px] h-[180px]" />
          <div className="sm:h-[96px] sm:text-[40px] flex flex-col  text-[28px] text-center justify-center items-center my-[27px]  font-bold">
            <span>{t("ProductHome.span1")}</span>
            <span  className="text-[#42B8FB]">{t("ProductHome.span2")}</span>
          </div>
          <div className=" sm:h-[92px] sm:text-xl mb-4 flex flex-col  text-sm items-center justify-center ">
          <p className="text-center"> {t("ProductHome.span3")}</p>
          
          </div>
          <span className="text-[#42B8FB]">{t("ProductHome.span4")}</span>
          <Link to={`${baseurl}/mininggpu`} >

          <button className="sm:w-44 sm:h-10 h-8 w-32 text-sm  mt-7 rounded-md bg-gradient-to-r from-[#9BEDFF] to-[#42B8FB] shadow-md border-none text-[#FFF] font-bold">{t("Button.Learnmore")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
