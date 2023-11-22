import React from "react";
import Youtube from "../components/Youtube";
import CardGpu from "./../components/CardGpu";

import pic1 from "../../assets/product/ams01.png";
import pic2 from "../../assets/product/ams02.png";
import pic3 from "../../assets/product/ams03.png";
import pic4 from "../../assets/product/ams04.png";
import pic5 from "../../assets/product/ams05.png";
import pic6 from "../../assets/product/ams06.png";
import pic7 from "../../assets/product/ams07.png";
import pic8 from "../../assets/product/ams08.png";
import pic9 from "../../assets/product/ams09.png";
import pic10 from "../../assets/product/rig-table.png";
import { useTranslation } from "react-i18next";
import Howdoes from "../components/Howdoes";
const AmsSpeed = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full">
      <div className="w-full flex flex-col bg-neutral-50 justify-center items-center gap-10 py-10 mb-5 ">
        <div className="text-sky-400 sm:text-5xl text-2xl font-bold ">
          <span>{t("AmsSpeed.span001")} </span>
        </div>
        <div className="flex flex-col sm:text-xl text-xs font-normal text-neutral-700 text-center">
          <span>{t("AmsSpeed.span002")}</span>
          <span>{t("AmsSpeed.span003")}</span>
        </div>
        <Youtube />
      </div>
      {/* Check your earnings*/}
      <div className="flex flex-col gap-10 justify-center items-center py-9 bg-neutral-50">
        <div className=" sm:text-5xl text-2xl font-bold flex gap-2">
          <span>{t("AmsSpeed.span004")}</span>
          <span className="text-sky-400">{t("AmsSpeed.span005")}</span>
        </div>

        <div className="flex flex-col sm:text-xl text-sm font-normal text-neutral-700 text-center">
          <span>{t("AmsSpeed.span006")}</span>
          <span>{t("AmsSpeed.span007")}</span>
        </div>
        <CardGpu />
      </div>

      {/*AMS SpeedyMiner Features */}
      <div className="  pt-10 pb-[59px] bg-neutral-50 flex-col justify-center  items-center gap-[68px] flex my-5">
        <div className="text-center">
          <span className="text-sky-400 sm:text-5xl text-2xl font-bold  leading-[21px]">
            {t("AmsSpeed.span01")}
          </span>
          <span className="text-neutral-700 sm:text-5xl text-2xl font-bold  leading-[21px] pl-2">
            {t("AmsSpeed.span02")}
          </span>
        </div>
        <div className="self-stretch flex-col justify-center  items-center gap-6 inline-flex">

          <div className="sm:flex hidden justify-center items-center gap-4">
            <div className="w-[282px] h-[342px] bg-white shadow  justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10 ">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic1} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span03")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span04")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic2} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span05")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span06")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex hidden justify-center items-center gap-4">
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic3} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span07")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span08")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic4} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span09")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span010")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic5} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">

                    {t("AmsSpeed.span011")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">

                    {t("AmsSpeed.span012")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex hidden justify-center items-center gap-4">

            <div className="w-[282px] h-[342px]  bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic7} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span013")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span014")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic6} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span015")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span016")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic8} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span017")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span018")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic9} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span019")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span020")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile display */}
          <div className="flex sm:hidden flex-col gap-4">

            <div className="w-[282px] h-[342px] bg-white shadow  justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10 ">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic1} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span03")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span04")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic2} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span05")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span06")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic3} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span07")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span08")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic4} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span09")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span010")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center items-center flex gap-4">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic5} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">

                    {t("AmsSpeed.span011")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">

                    {t("AmsSpeed.span012")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px]  bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic7} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span013")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span014")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic6} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span015")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span016")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic8} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span017")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span018")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[282px] h-[342px] bg-white shadow flex-col justify-center  items-center inline-flex">
              <div className="justify-center items-center flex flex-col gap-10">
                <div className="h-[50px]">
                  <img className="w-[60px] h-[60px] relative" src={pic9} />
                </div>
                <div className="h-[15px] flex items-center">
                  <div className="text-center text-neutral-700 text-lg font-bold  leading-[21px]">
                    {t("AmsSpeed.span019")}
                  </div>
                </div>
                <div className="h-[90px] flex items-start">
                  <div className="w-[254px] text-center text-neutral-400 text-base font-normal  leading-[21px]">
                    {t("AmsSpeed.span020")}
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Supervise Your Rig */}
      <div className="flex flex-col justify-center items-center py-8 gap-3">
        <div className="sm:gap-5 gap-3 flex justify-center items-center flex-col ">
          <div className="flex text-neutral-700 sm:text-5xl text-2xl font-bold">
            <span>{t("AmsSpeed.span008")}</span>&nbsp;
            <span className="text-sky-400">{t("AmsSpeed.span009")}</span>
          </div>
          <div className="flex flex-col items-center sm:text-[16px] text-[10px]">
            <span>{t("AmsSpeed.span0010")}</span>
          </div>
          <div className="flex flex-col items-center sm:text-[16px] text-[10px]">
            <span>{t("AmsSpeed.span0011")}</span>
          </div>
        </div>

        <div className="sm:w-[1224px] w-[85%]">
          <img src={pic10} alt="" />
        </div>
      </div>

      {/* How does AMS  */}
      <Howdoes />
    </div>
  );
};

export default AmsSpeed;
