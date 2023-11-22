import power from "../../assets/AMSMining/AMSpower.png"
import { useTranslation } from "react-i18next"
const AMSContent2 = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className='w-full bg-[#FAFAFA] text-center '>
            <div className='gap-2 flex items-center justify-center pt-10'>
                <span className='text-[#3A3939] sm:text-[48px] text-[30px] font-bold '>{t("AMSMining.p05")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[30px] font-bold '>{t("AMSMining.p06")}</span>
            </div>

            <div className='mt-4 flex flex-col'>
                <span className='text-[#3A3939] sm:text-[20px] text-[10px]'>{t("AMSMining.p07")}</span>
                <span className='text-[#3A3939] sm:text-[20px] text-[10px]'>{t("AMSMining.p08")}</span>
            </div>

            <div className="mt-10 flex justify-center">
                <img src={power} alt="" className="sm:w-[65%] w-[75%] object-cover" />

            </div>

        </div>
    )
}

export default AMSContent2