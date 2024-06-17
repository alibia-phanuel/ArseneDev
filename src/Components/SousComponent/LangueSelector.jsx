import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", lang: "French" },
  { code: "en", lang: "English" },
];

const LangueSelector = () => {
  const [isblock, setBlock] = useState(false);
  const showMenuResponsive = isblock ? "" : "hidden";

  const { i18n } = useTranslation();
  //onClick funtion
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div>
      {/**langue */}
      <div
        onClick={() => setBlock(!isblock)}
        className="relative flex justify-center  vitems-center gap-x-2 border text-[15px] p-2 max-[446px]:p-2 rounded-lg hover:text-[#313552] cursor-pointer hover:bg-[#FFD43B] border-[#FFD43B] hover:border-[#2d2d2d] font-bold  transition-all ease-in-out"
      >
        <i className="fa-solid fa-language"></i>
        <p href="">language </p>
        <i className="fa-solid fa-angle-down"></i>
        <div
          className={`${showMenuResponsive} flex flex-col gap-2  absolute left-[0px] w-full top-[45px]  rounded-lg p-2 transition-all ease-in-out z-20  bg-white text-[#221f29]`}
        >
          {languages.map((lng) => {
            return (
              <button
                className={
                  lng.code === i18n.language
                    ? "bg-[#FFD43B] text-[#313552] rounded-lg py-2"
                    : "rounded-lg py-2 "
                }
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
              >
                {lng.lang}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LangueSelector;
