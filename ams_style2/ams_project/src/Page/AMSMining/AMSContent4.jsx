import bg from '../../assets/AMSMining/AMSiningBg2.png'
import coin1 from '../../assets/AMSMining/btc.png'
import coin2 from '../../assets/AMSMining/ltc.png'
import coin3 from '../../assets/AMSMining/doge.png'
import coin4 from '../../assets/AMSMining/bch.png'
import coin5 from '../../assets/AMSMining/rvn.png'
import { useTranslation } from "react-i18next"

const AMSContent4 = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',  
    };
    const [t, i18n] = useTranslation("global");
    return (
        <div className='w-full  relative mt-4 flex item-center flex-col ' style={backgroundImageStyle}>
           
           {localStorage.getItem("Lang") === "US" ? (
            <div className='gap-2 flex items-center justify-center sm:pt-10 pt-4'>
                <span className='text-[#fff] sm:text-[48px] text-[20px] font-bold'>{t("AMSMining.p09")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[20px] font-bold'>{t("AMSMining.p010")} </span>
            </div>
            ) : (
            <div className='gap-2 flex items-center justify-center sm:pt-10 pt-4'>
                <span className='text-[#fff] sm:text-[48px] text-[20px] font-bold'>{t("AMSMining.p009")}</span>
                <span className='text-[#42B8FB] sm:text-[48px] text-[20px] font-bold'>{t("AMSMining.p0010")} </span>
                <span className='text-[#fff] sm:text-[48px] text-[20px] font-bold'>{t("AMSMining.p0011")}</span>
            </div>
                )}

            <div className='pb-2 px-2 sm:px-0 w-full flex justify-center items-center gap-10 text-[#fff] mt-4'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='sm:sm:text-5xl text-[12px] font-bold'>199</span>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <img src={coin1} alt="" className='w-[18px] h-[18px]' />
                        <span className='sm:text-[16px] text-[10px]'>BTC</span>
                        
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='sm:text-5xl text-[12px] font-bold'>212</span>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <img src={coin2} alt="" className='w-[18px] h-[18px]' />
                        <span className='sm:text-[16px] text-[10px]'>LTC</span>
                        
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='sm:text-5xl text-[12px] font-bold'>3927</span>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <img src={coin3} alt="" className='w-[18px] h-[18px]' />
                        <span className='sm:text-[16px] text-[10px]'>DOGE</span>
                        
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='sm:text-5xl text-[12px] font-bold'>4520</span>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <img src={coin4} alt="" className='w-[18px] h-[18px]' />
                        <span className='sm:text-[16px] text-[10px]'>BCH</span>
                        
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='sm:text-5xl text-[12px] font-bold'>51155</span>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <img src={coin5} alt="" className='w-[18px] h-[18px]' />
                        <span className='sm:text-[16px] text-[10px]'>RVN</span>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AMSContent4