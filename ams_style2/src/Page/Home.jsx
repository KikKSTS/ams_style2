import React from "react";
import ProductHome from "./components/ProductHome";
import backgroundImage from "../assets/background.png";
import logohome from "../assets/logo/logo-home.png";
import { useTranslation } from "react-i18next";

function Home() {
  const [t, i18n] = useTranslation("global");

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "458px", // Set the height as needed
    backgroundSize: "cover", // Adjust based on your requirements
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div
        className="  sm:h-[458px] h-auto  bg-cover flex justify-center items-center"
        style={backgroundStyle}
      >
        <div className="flex flex-col text-white items-center">
          <img
            src={logohome}
            alt="logo-home"
            className="sm:w-[220px] sm:h-[56px] w-[180px] h-[46px] mb-[30px]"
          />
          <div className="flex flex-col gap-1 font-bold sm:text-5xl text-[28px]  text-center ">
            <span>{t("Home.header_w1")}</span>
            <span className="text-[#42B8FB]">{t("Home.header_b1")}</span>
            <span>
            {t("Home.header_w2")}
              <span className="text-[#42B8FB]"> {t("Home.header_b2")}</span>
            </span>
          </div>
          <p className="mt-[20px] font-[400] sm:text-[24px]">
          {t("Home.header_b3")}
          </p>
        </div>
      </div>
      <ProductHome />
    </>
  );
}

export default Home;
