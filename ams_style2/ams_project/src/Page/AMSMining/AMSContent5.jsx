import img from "../../assets/AMSMining/detail.png";
import { useTranslation } from "react-i18next";

const AMSContent5 = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full  bg-gradient-to-r from-cyan-100 to-sky-200 text-center mt-4 ">
      <div className="py-10">
        <div className="gap-2 flex items-center justify-center ">
          <span className="text-[#3A3939] sm:text-[48px] text-[30px]  font-bold "> {t("AMSMining.p024")}</span>
          <span className="text-[#42B8FB] sm:text-[48px] text-[30px] font-bold ">
          
            {t("AMSMining.p025")}
          </span>
        </div>

        <div className="mt-4 flex flex-col">
          <span className="text-[#3A3939] sm:text-[20px] text-[10px] w-[50%] mx-auto">
          {t("AMSMining.p026")}

          </span>
        </div>

        <div className="flex flex-col items-center mt-10">
          <img src={img} alt="" className="sm:w-[30%] w-[65%]" />
          <img src={img} alt="" className="sm:w-[30%] w-[65%]" />
          <img src={img} alt="" className="sm:w-[30%] w-[65%]" />
        </div>
      </div>
    </div>
  );
};

export default AMSContent5;
