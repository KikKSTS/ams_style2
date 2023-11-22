import Bg_header from "../../assets/header_bg_learnMore.png";
import { useTranslation } from "react-i18next";
const Hearder = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="w-full header relative flex flex-col items-center justify-start sm:h-[413px] h-[150px]  rounded-b-[30%] overflow-hidden">
            <img src={Bg_header} className="w-full absolute z-[-1] object-contain" />
            <div className="text-white sm:text-[56px] text-[25px] font-bold mt-6">{t("Hardware.p01")}</div>
            <div className="sm:h-[35px]"></div>
            <div className="text-white sm:text-[35px] text-[16px]">{t("Hardware.p02")}
            
            </div>
        </div>
    )
}

export default Hearder