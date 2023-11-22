import bg from "../../assets/AMSMining/AMSMiningBg.png";
import { Link } from "react-router-dom";
import { handleMouseClick } from "../../components/Function/Cilck";
import { useTranslation } from "react-i18next"
const AMSContent1 = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL;
  return (
    <div
      className="w-full  flex justify-center items-center flex-col  sm:h-[510px] h-[400px] sm:py-5 py-0"
      style={backgroundImageStyle}
    >
      <div className=" flex justify-center items-center flex-col gap-8 sm:pt-[105px] pt-6">
        <div>
          <span className="text-[#42B8FB] sm:text-[48px] text-[30px]  font-bold">{t("AMSMining.p01")}

          </span>
        </div>

        <span className="text-[#fff] sm:text-[20px] text-[14px]">{t("AMSMining.p02")}

        </span>
        <div className="text-center text-[#fff] sm:text-[14px] text-[10px]">
          <span>{t("AMSMining.p03")}

          </span>
          <br />
          <span>{t("AMSMining.p04")}"</span>
        </div>
        {/* <Link to={`${baseurl}/hardware`} onClick={handleMouseClick}>
          <button className="text-[#fff] sm:text-[14px] text-[12px] bg-gradient-to-r from-[#9BEDFF] to-[#42B8FB] p-4 rounded-md font-bold">
            {t("Button.Learnmore")}
          </button>
        </Link>

        <div className="text-center  bottom-4">
          <span className="text-[#959595] sm:text-[12px] text-[10px]">
            *Bitcoin price valued at $34,746, November 2023
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default AMSContent1;
