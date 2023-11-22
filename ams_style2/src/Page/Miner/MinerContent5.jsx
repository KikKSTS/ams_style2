
import { useTranslation } from "react-i18next";
import Howdoes from './../components/Howdoes';

const MinerContent5 = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full mt-4">
      {/* <div className="gap-2 flex items-center justify-center mt-4 flex-col sm:flex-row">
        <span className="text-[#3A3939] sm:text-[48px] text-[30px] font-bold">
          {t("Miner.desp21")}
        </span>
        <span className="text-[#42B8FB] sm:text-[48px] text-[30px] font-bold">
          {t("Miner.desp22")}
        </span>
      </div>

      <div className="flex items-center justify-center flex-col mt-6 text-center">
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp23")}</span>
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp24")}</span>
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp25")}</span>

        <br />
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp26")}</span>
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp27")}</span>
        <span className="text-[#959595] sm:text-[16px] text-[12px]">{t("Miner.desp28")}</span>
      </div> */}

    <Howdoes/>
    </div>
  );
};

export default MinerContent5;
