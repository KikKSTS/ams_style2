
import miner1 from "../../assets/Miner/miner1.png"
import { useTranslation } from "react-i18next";

const MinerContent1 = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div className='w-full bg-[#FAFAFA] text-center'>
            <div className='gap-2 flex items-center justify-center mt-4'>
                <span className='text-[#3A3939] sm:text-[48px] text-[30px] font-bold '>AMS</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[30px] font-bold '>{t("Miner.desp1")}</span>
            </div>

            <div className='mt-4'>
                <span className='text-[#3A3939] sm:text-[20px] text-[10px] '>{t("Miner.desp2")}</span>
            </div>

            <div className="mt-4 flex justify-center">
                <img src={miner1} alt="" className="sm:w-[40%] w-[90%] object-cover" />

            </div>
        </div>
    )
}

export default MinerContent1