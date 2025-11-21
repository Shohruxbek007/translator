import React from 'react'
import i18next, { changeLanguage } from 'i18next'
import {initReactI18next, useTranslation} from "react-i18next";
import uzb from './Uztarjima';
import engl from './Engtarjima';
i18next.use(initReactI18next).init({
  resources: {
    en: {translation: engl},
    uz: {translation: uzb},
    
  },
lng: "en",
fallbackLng:"en"
});
const App = () => {
  const {t}=useTranslation();
  function translate(e){
    changeLanguage(e.target.value);
  }
  return (
    <div className='w-[100%] h-[100vh] '>
      <div className=' px-[10px] w-full h-[60px] bg-amber-400 flex justify-between items-center'>
        <h1 className='text-white text-[30px]'>My Website</h1>
        <ul className='text-white gap-3 flex flex-row'>
          <li><a href="">{t("home")}</a></li>
          <li><a href="">{t("about")}</a></li>
          <li><a href="">{t("contact")}</a></li>
          <li><a href="">{t("service")}</a></li>
          <li><select className='text-white' onChange={translate}>
            <option value="eng">ENG</option>
            <option value="uz">UZB</option></select></li>
        </ul>
      </div>
      <h1 className='py-[20px] px-[20px]'>{t("text")}</h1>
    </div>
  )
}

export default App
