import React from "react";
import Footer from "../components/Footer";
import iconW from "../../assets/icon/Warning.png";
import "./Gpu.css";

import CardGpu from "../components/CardGpu";
import Youtube from "../components/Youtube";
import nvidia from "../../assets/logo/div.nvidia.png";
import Secure from "../../assets/logo/Secure.png";
import amd from "../../assets/logo/div.amd.png";
import icon from "../../assets/logo/div.icon.png";
import intel from "../../assets/logo/div.intel.png";
import modgpu from "../../assets/mod/mod-gpu.png";
import com from "../../assets/product/com-img.png";
import gputable from "../../assets/product/gpu-table.png";
import backgroundImage from "../../assets/GPU/bg-gpu.png";
import backgroundImage1 from "../../assets/bg-gpu.png";
import { useTranslation } from "react-i18next";
import Howdoes from "./../components/Howdoes";

const Gpu = () => {
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  const backgroundStyle1 = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${backgroundImage1})`,
  };
  return (
    <div>
      <div
        className="sm:h-[458px] bg-cover flex justify-center items-center"
        style={backgroundStyle1}
      >
        <div className=" sm:p-0 sm:px-[20px] px-[10px] py-4 flex flex-col justify-center items-center gap-6">
          {localStorage.getItem("Lang") === "US" ? (
            <div className="sm:flex-row  flex flex-col uppercase">
              <div className="sm:text-start sm:text-5xl text-sky-400 text-2xl  font-bold  text-center">
                {t("CPU_GPU.header_1")}
              </div>
              <div className="sm:text-start sm:text-5xl text-[#3A3939] text-2xl font-bold text-center">
                {t("CPU_GPU.header_2")}
              </div>
            </div>
          ) : (
            <div className="flex">
              <span className="sm:text-5xl text-[#3A3939]  text-2xl font-bold">
                {t("CPU_GPU.header_1")}
              </span>
              <span className="sm:text-5xl text-sky-400  text-2xl font-bold ">
                {t("CPU_GPU.header_02")}
              </span>
              <span className="sm:text-5xl text-[#3A3939]  text-2xl font-bold">
                {t("CPU_GPU.header_03")}
              </span>
            </div>
          )}
          <div className=" sm:text-xl flex flex-col justify-center items-center text-center text-neutral-700  font-normal ">
            <span>{t("CPU_GPU.subHeader_1")}</span>
          </div>

          <div className=" sm:text-xl flex flex-col justify-center items-center text-center text-neutral-700  font-normal ">
            <span>{t("CPU_GPU.subHeader_2")}</span>
          </div>
        </div>
      </div>
      {/* Component 1 */}
      <div className="sm:inline-flex sm:w-full  sm:p-4 sm:justify-center sm:items-start sm:gap-4">
        <div className="sm:justify-start w-full h-[697px] relative bg-neutral-50 flex-col justify-center items-center flex">
          <div className="justify-center items-center flex">
            <div className="sm:w-[100px] sm:text-[40px] text-2xl h-[70px] text-center text-neutral-700  font-bold  leading-[70px] flex items-center">
              {t("Word.AMS")}{" "}
            </div>
            <div className="sm:w-[258px] sm:text-[40px] text-2xl h-[45px]  text-center text-sky-400  font-bold  leading-[70px] flex items-center">
              {t("CPU_GPU.headContain1_box1")}
            </div>
          </div>
          <div className="sm:w-[550px] sm:h-12 pl-[1.41px] pr-[1.21px] py-[3px]  justify-center items-center sm:inline-flex">
            <div className="sm:w-[547.38px] sm:text-base sm:h-[42px] text-sm text-center text-neutral-700  font-normal  leading-normal">
              {t("CPU_GPU.despContain1_box1")}
            </div>
          </div>
          <div className="sm:gap-4 sm:flex-row flex-col gap-5 flex my-4">
            <img className="sm:w-[125px] h-6" src={nvidia} />
            <img className="sm:w-[99px] h-6" src={amd} />
            <div className="flex justify-center items-center">
              <img className="sm:w-5 h-6 " src={icon} />
              <img className="sm:w-[87.24px] h-4 text-center" src={Secure} />
            </div>
          </div>
          <a href={`${baseurl}/amsspeed`}>
            <button className="sm:w-[180px] h-[43px] pl-[48.41px] pr-[48.09px] py-[15px] bg-white rounded shadow justify-center items-center inline-flex">
              {t("Button.Learnmore")}{" "}
            </button>
          </a>
          <div className="mt-6">

          <Youtube />
          </div>
        </div>
        {/* right */}
        <div className="w-full h-[697px] relative bg-neutral-50 flex-col justify-start items-center flex">
          <div className="sm:w-[226px] justify-start items-center inline-flex">
            <div className="sm:w-[105px] h-[70px] text-center text-neutral-700 text-[40px] font-bold  leading-[70px] flex items-center">
              {t("Word.AMS")}
            </div>
            <div className="sm:w-[111.62px] h-[45px] text-center text-sky-400 text-[40px] font-bold  leading-[70px] flex items-center">
              {t("CPU_GPU.headContain1_box2")}
            </div>
          </div>
          <div className="sm:w-[550px] h-12 pl-[1.41px] pr-[1.21px] py-[3px] justify-center items-center inline-flex">
            <div className="sm:w-[547.38px] sm:text-base text-sm h-[42px] text-center text-neutral-700  font-normal  leading-normal">
              {t("CPU_GPU.despContain1_box2")}{" "}
            </div>
          </div>
          <div className="sm:gap-4 sm:flex-row flex-col gap-5 flex my-4">
            <img className="sm:w-[125px] h-6" src={nvidia} />
            <img className="sm:w-[99px] h-6" src={amd} />
            <div className="flex justify-center items-center">
              <img className="sm:w-14 h-[25px] " src={intel} />
            </div>
          </div>
          <a href={`${baseurl}/miner`}>
            <button className="sm:w-[180px] h-[43px] pl-[48.41px] pr-[48.09px] py-[15px] bg-white rounded shadow justify-center items-center inline-flex">
              {t("Button.Learnmore")}
            </button>
          </a>
          <img className="sm:w-[570px] sm:h-[393px] relative mt-6" src={modgpu} />
        </div>
      </div>

      {/* Component2 */}
      <div className="sm:px-[136px] sm:pt-[160px] sm:pb-[80px] flex ">
        <div
          className="w-full  sm:px-20 sm:pt-10 sm:pb-[70px] justify-center items-start inline-flex bg-cover "
          style={backgroundStyle2}
        >
          <div className="sm:items-start sm:w-auto sm:pl-[16.28px] items-center w-full h-[333.09px]  pt-[113.82px] pb-[114.27px] flex-col justify-center   inline-flex">
            <div className="sm:text-[40px] text-[24px] text-white font-light  leading-[60px] flex items-center ">
              {t("CPU_GPU.Banner_1")}
            </div>
            <div className=" sm:text-[40px] text-[24px] text-sky-400 font-bold leading-[60px] flex items-center ">
              {t("CPU_GPU.Banner_2")}
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="grow shrink basis-0 h-[202px] justify-center items-center inline-flex">
              <img src={com} className="sm:block sm:w-[332px] hidden h-[201.77px] relative"></img>
            </div>
          </div>
        </div>
      </div>
      {/* component 3 */}
      <div className=" flex flex-col items-center py-[50px]  bg-[#EEEEEE]">
        {localStorage.getItem("Lang") === "US" ? (
          <div className="sm:flex sm:flex-row sm:text-3xl text-2xl flex flex-col text-center  font-bold">
            <span className=" text-sky-400 sm:pr-[10px]">
              {t("CPU_GPU.headContain2_1")}
            </span>
            <span>{t("CPU_GPU.headContain2_2")}</span>
          </div>
        ) : (
          <div className="sm:flex sm:flex-row sm:text-3xl text-2xl flex flex-col text-center  font-bold">
            <span className=" sm:pr-[10px]">
              {t("CPU_GPU.headContain2_1")}
            </span>
            <span className="text-sky-400 ">{t("CPU_GPU.headContain2_2")}</span>
          </div>
        )}
        <div className="flex  text-[#3A3939] mt-8">
          <span>{t("CPU_GPU.despContain2_1")}</span>
        </div>
        <div className=" py-8">
          <img className="border border-none sm:w-[60%] w-[90%] mx-auto " src={gputable} alt="" />
        </div>

        <div className="sm:text-xl flex flex-col items-center gap-4 text-center text-sm">
          <span>{t("CPU_GPU.despContain2_2")}</span>
          <span>{t("CPU_GPU.despContain2_3")}</span>
        </div>

        <div className="bg-white sm:w-[770px] sm:h-[282px] px-[70px] py-5  my-4 flex flex-col gap-4 items-center justify-center">
          <div>
            <img className="h-[18px]" src={iconW} alt="iconW" />
          </div>
          <div className="sm:text-xl font-bold">
            <span>{t("CPU_GPU.headContain2_3")}</span>
          </div>
          <div className=" sm:text-sm flex flex-col items-center text-center text-neutral-400  text-[14px]">
            <span>{t("CPU_GPU.despContain2_4")}</span>
          </div>
          <div className=" sm:text-sm  flex flex-col items-center text-center text-neutral-400 text-[14px]">
            <span>{t("CPU_GPU.despContain2_5")}</span>
          </div>
        </div>
      </div>
      {/* componet4 */}

      <div className="flex flex-col justify-center items-center gap-4 bg-[#EEEEEE] my-3">
        <div className="m-6 flex flex-col justify-center items-center gap-4">
          <div className="flex items-center sm:text-[40px] text-[20px] font-bold ">
            <span>{t("CPU_GPU.headContain3_1")}</span> &nbsp;
            <span className="text-sky-400">{t("CPU_GPU.headContain3_2")}</span>
          </div>
          <div className=" sm:text-base sm:text-[16px] flex flex-col items-center text-neutral-700  text-center text-[14px] leading-normal ">
            <span>{t("CPU_GPU.despContain3_1")}</span>
          </div>

          {/* Component CradGpu */}
          <CardGpu />

          {/* <div>
            <span>{t("CPU_GPU.despContain3_4_1")}</span>
            &nbsp;
            <Link to="/devices" className="cursor-pointer text-sky-400">
              {t("CPU_GPU.despContain3_4_2")}↗
            </Link>
          </div> */}
        </div>
      </div>
      {/* Component 5 */}
      <Howdoes />
    </div>
  );
};

export default Gpu;
