
import CardGpu from '../components/CardGpu'
import { useTranslation } from "react-i18next";
import { handleMouseClick } from "../../components/Function/Cilck";
import { Link } from "react-router-dom";
const MinerContent2 = () => {
    const [t, i18n] = useTranslation('global')
    return (
        <div className='w-full h-[700px] bg-[#FAFAFA] mt-4'>
            <div className='gap-2 flex items-center justify-center mt-4'>
                <span className='text-[#3A3939] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp3")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp4")}</span>
            </div>

            <div className='flex items-center justify-center flex-col mt-4'>
                <span className='text-[#3A3939] sm:text-[16px] text-[10px] '>{t("Miner.desp5")}</span>
                <span className='text-[#3A3939] sm:text-[16px] text-[10px]'>{t("Miner.desp6")}</span>
            </div>
            <div className='flex justify-center items-center mt-10'>
                < CardGpu />

            </div>

            <div className='text-[#959595] text-[14px] mt-16 text-center'>
                <span>{t("Miner.desp01")}</span>
                <Link to="/hardware" onClick={handleMouseClick}> 
                <span className='text-[#128EDE]'>{t("Miner.desp02")}</span>
                </Link>
                {/* <img src="" alt="" /> */}
            </div>

        </div>
    )
}

export default MinerContent2