//Tranduction dependances
import { useTranslation } from "react-i18next";
function More() {
  const { t } = useTranslation();
  const { Sectitle7 } = t("FullStack");
  return (
    <div className="w-full flex justify-center items-center bg-[#313552] py-[100px] flex-col text-[#FFD43B] text-[20px]">
      <span className="capitalize">{Sectitle7}</span>
      <a href="https://www.youtube.com/@phanuelalibia" target="_blanck">
        <i className="fa-brands fa-youtube text-[#c44141] relative top-5 text-[40px] bg-white rounded-full p-2"></i>
      </a>
    </div>
  );
}

export default More;
