
import rig from "../../assets/Miner/ring.png"
import { useTranslation } from "react-i18next";

const MinerContent4 = () => {
    const [ t, i18n] = useTranslation("global")
    return (
        <div className='w-full h-[500px] bg-[#FAFAFA] my-4'>

            <div className='gap-2 flex items-center justify-center mt-4'>
                <span className='text-[#3A3939] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp17")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp18")}</span>
            </div>

            <div className='flex items-center justify-center flex-col mt-4 gap-4 text-center px-3'>
                <span className='text-[#3A3939] sm:text-[16px] text-[10px]'>{t("Miner.desp19")}</span>
                <span className='text-[#3A3939] sm:text-[16px] text-[10px]'>{t("Miner.desp20")}</span>
            </div>

            <div className='flex justify-center mt-6'>
                <img src={rig} alt="" className='w-[80%]'/>
            </div>

        </div>
    )
}

export default MinerContent4