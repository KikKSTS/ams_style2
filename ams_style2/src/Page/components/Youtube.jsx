import React from 'react';
import AMSLogo from "../../assets/logo/AMS-Logo.png";
import arrow from "../../assets/logo/div.arrow.png";
import Symbol from "../../assets/icon/Symbol.png";
import { useTranslation } from "react-i18next";
const Youtube = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
     <div className="flex flex-col items-center">
          <div className="flex mt-5">
            <img
              className="sm:w-[18.31px] h-[18px] text-center text-neutral-700 text-lg font-normal font-['Font Awesome 5 Free'] leading-[18px]"
              src={Symbol}
            />
            <div className="sm:w-[214.25px] h-4 text-center text-neutral-400 text-sm font-normal  leading-[21px]">
            
              {t("Youtube.span1")}
            </div>
            <img
              className="sm:w-[50px] h-[50px] origin-top-left rotate-[-20deg]"
              src={arrow }
            />
          </div>

          <div className="sm:w-[480px] h-[255px] bg-white rounded-md shadow justify-center items-center inline-flex">
            <div className="sm:w-[480px] h-[255px] relative flex-col justify-start items-start flex">
              <div className="sm:w-[480px] h-[50px] bg-zinc-300 bg-opacity-50 flex items-center">
                <div className="justify-start items-end gap-1 inline-flex">
                  <img
                    className="w-[100px] h-7"
                  src={AMSLogo}
                  />
                  <div className="text-center text-neutral-700 text-xl font-normal font-['Roboto'] leading-normal">
                    What is Bitcion mining?
                  </div>
                </div>
              </div>
              <iframe
                height="205"
                src="https://www.youtube.com/embed/GmOzih6I1zs"
                allowFullScreen
                className='w-full'
              ></iframe>
            </div>
          </div>
          </div>
    </div>
  );
}

export default Youtube;
