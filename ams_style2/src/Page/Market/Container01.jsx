import React from 'react';
import { useTranslation } from "react-i18next"
import { handleMouseClick } from "../../components/Function/Cilck";
import { Link } from "react-router-dom";
const Container01 = () => {
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL
  return (         
    <>
        <div className="py-10 ">
        <div className="flex flex-col justify-center items-center  ">
          <div className="flex text-[3.5vw] py-10 w-[80%] justify-between">
            <span className="font-bold">{t("Market.p04")}</span>
            <span className="font-light">{t("Market.p05")}</span>
          </div>

          <div className="flex flex-wrap gap-6  justify-around	" >
            <div className="flex justify-center items-center flex-col gap-4 py-10 ">
            <div className="h-[335px] w-[368px] bg-white rounded-[5px] border-b-2 border-blue-500 shadow flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center flex-col gap-5">
                  <div>
                    <img src="" alt="" />
                    <span>Bitcoin</span>
                  </div>
                  <div>
                    <span>Bitcoin</span>
                    <span>EH/day</span>
                  </div>
                  <div>
                    <span>SHA256ASICBOOST for 24 hours</span>
                  </div>
                </div>
                <hr className="w-full text-neutral-700" />
                <div>
                  <div className="flex justify-center items-center flex-col gap-5">
                    <div>
                      <img src="" alt="" />
                      <span>Bitcoin</span>
                    </div>
                    <div>
                      <span>Bitcoin</span>
                      <span>EH/day</span>
                    </div>
                    <div>
                      <span>SHA256ASICBOOST for 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className=" px-[115px] py-[20px] bg-gradient-to-r from-cyan-200 to-sky-400 rounded shadow justify-center items-center inline-flex">
                Buy AMS POWER
              </button> */}
            </div>

            {/*  */}

            <div className="flex justify-center items-center flex-col gap-4 py-10">
            <div className="h-[335px] w-[368px] bg-white rounded-[5px] border-b-2 border-orange-400 shadow flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center flex-col gap-5">
                  <div>
                    <img src="" alt="" />
                    <span>Bitcoin</span>
                  </div>
                  <div>
                    <span>Bitcoin</span>
                    <span>EH/day</span>
                  </div>
                  <div>
                    <span>SHA256ASICBOOST for 24 hours</span>
                  </div>
                </div>
                <hr className="w-full text-neutral-700" />
                <div>
                  <div className="flex justify-center items-center flex-col gap-5">
                    <div>
                      <img src="" alt="" />
                      <span>Bitcoin</span>
                    </div>
                    <div>
                      <span>Bitcoin</span>
                      <span>EH/day</span>
                    </div>
                    <div>
                      <span>SHA256ASICBOOST for 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className=" px-[115px] py-[20px] bg-gradient-to-r from-cyan-200 to-sky-400 rounded shadow justify-center items-center inline-flex">
                Buy AMS POWER
              </button> */}
            </div>
            {/*  */}
          <div className="flex justify-center items-center flex-col gap-4 py-10" >
          <div className="h-[335px] w-[368px] bg-white rounded-[5px] border-b-2 border-zinc-800 shadow flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center flex-col gap-5">
                    <div>
                    <img src="" alt="" />
                    <span>Bitcoin</span>
                    </div>
                    <div>
                    
                    <span>Bitcoin</span>
                    <span>EH/day</span>
                    </div>
                    <div>
                        <span>SHA256ASICBOOST for 24 hours</span>
                    </div>
                </div>
                <hr className="w-full text-neutral-700" />
                <div>
                <div className="flex justify-center items-center flex-col gap-5">
                    <div>
                    <img src="" alt="" />
                    <span>Bitcoin</span>
                    </div>
                    <div>
                    
                    <span>Bitcoin</span>
                    <span>EH/day</span>
                    </div>
                    <div>
                        <span>SHA256ASICBOOST for 24 hours</span>
                    </div>
                </div>
                </div>
            </div>
            {/* <button className=" px-[115px] py-[20px] bg-gradient-to-r from-cyan-200 to-sky-400 rounded shadow justify-center items-center inline-flex">Buy AMS POWER</button> */}
            </div>

          </div>
          <Link to={`${baseurl}/price`} onClick={handleMouseClick}>
          {localStorage.getItem("Lang") === "US" ? (
            <span className="text-center text-sky-500 text-sm font-bold">{t("Market.seeall")}</span>
            ):(
            <span className="text-center  text-xl font-bold">{t("Market.seeall")}</span>
          )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Container01;
