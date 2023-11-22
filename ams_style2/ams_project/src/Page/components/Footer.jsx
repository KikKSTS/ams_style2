import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import logo from '../../assets/logo/logo-home.png'
import {useTranslation} from "react-i18next"


const Footer = () => {
  const [t ,i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("Lang"));

  const handleLanguageChange = (code) => {
    // Add your logic for language change here
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
    localStorage.setItem("Lang",code)
    // You can also use i18n to set the language based on the selected code
    // For example, i18n.changeLanguage(code);
  };

  const customLabels = {
    US: 'English',
    CN: 'Chinese',
    // Add more custom labels as needed
  };
  return (
    <div className=" flex flex-col w-full h-[205px] justify-center bg-[#3A3939]  ">
      <div className="md:w-[70%] w-[90%] flex  justify-between items-center mx-auto ">
        <div className="logo h-[44px] w-[169px]">
          <img src={logo} alt="Your Logo" />
        </div>

        <ReactFlagsSelect
          className="menu-flags rounded-md bg-white h-[43px]" // เพิ่มคลาส border-none
          selected={selectedLanguage}
          onSelect={handleLanguageChange}
          countries={["US", "CN"]}
          customLabels={customLabels}
        />
      </div>
      <hr className="mt-[35px] w-[70%] mx-auto" />
      <div className="flex justify-center text-white">
        <span className="text-[#959595] text-sm">Copyright © 2023</span>
      </div>
    </div>
  );
};

export default Footer;
