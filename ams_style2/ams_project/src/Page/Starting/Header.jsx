import React from 'react'
import Bg_header from '../../assets/header_bg_learnMore.png'
import './Starting.css'
import {useTranslation} from "react-i18next"


const Header = () => {
  const [t ,i18n] = useTranslation("global");

  return (
    <div className='sm:h-[300px] header relative flex items-center justify-center h-[100px]  rounded-b-[30%] overflow-hidden'>
      <img src={Bg_header} className='w-full absolute z-[-1]' />
      <span>{t("Starting.header")}</span>
    </div>
  )
}

export default Header
