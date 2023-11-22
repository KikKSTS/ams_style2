
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import miner1 from "../../assets/Miner/miner1.png"
import miner2 from "../../assets/Miner/miner2.png"
import miner3 from "../../assets/Miner/miner3.png"
import miner4 from "../../assets/Miner/miner4.png"
import { useTranslation } from "react-i18next";

const MinerContent3 = () => {
    const [ t, i18n] = useTranslation("global")
    return (
        <div className='w-full bg-[#FAFAFA] mt-4 flex flex-col justify-center items-center'>
            <div className='gap-2 flex items-center justify-center mt-4'>
                <span className='text-[#3A3939] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp7")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[30px] font-bold'>{t("Miner.desp8")}</span>
            </div>

            <div className="flex sm:w-full w-[90%] flex-col justify-center items-center mt-6">
                <Tabs aria-label="Options">
                    <Tab key="dashboard" title={t("Miner.tab1")} className="sm:text-[14px] text-[10px]">
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <div className='flex flex-col text-center text-[#959595] sm:sm:text-[16px] text-[12px]'>
                                <span>{t("Miner.desp9")}</span>
                                <span>{t("Miner.desp10")}</span>
                               
                            </div>
                            <img src={miner1} alt="" className='sm:w-[45%] w-[80%] mt-2' />
                        </div>
                    </Tab>
                    <Tab key="devices" title={t("Miner.tab2")} className="sm:text-[14px] text-[10px]">
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <div className='flex flex-col text-center text-[#959595] sm:text-[16px] text-[12px]'>
                                <span>{t("Miner.desp11")}</span>
                                <span>{t("Miner.desp12")}</span>
                               
                            </div>
                            <img src={miner2} alt="" className='sm:w-[45%] w-[80%] mt-2' />
                        </div>
                    </Tab>
                    <Tab key="benchmark" title={t("Miner.tab3")} className="sm:text-[14px] text-[10px]">
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <div className='flex flex-col text-center text-[#959595] sm:text-[16px] text-[12px]'>
                                <span>{t("Miner.desp13")}</span>
                                <span>{t("Miner.desp14")}</span>
                                <span></span>
                            </div>
                            <img src={miner3} alt="" className='sm:w-[45%] w-[80%] mt-2' />
                        </div>
                    </Tab>
                    <Tab key="plugins" title={t("Miner.tab4")} className="sm:text-[14px] text-[10px]">
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <div className='flex flex-col text-center text-[#959595] sm:text-[16px] text-[12px]'>
                                <span>{t("Miner.desp15")}</span>
                                <span>{t("Miner.desp16")}</span>
                              
                            </div>
                            <img src={miner4} alt="" className='sm:w-[45%] w-[80%] mt-2' />
                        </div>
                    </Tab>
                   
                </Tabs>
            </div>

        </div>
    )
}

export default MinerContent3