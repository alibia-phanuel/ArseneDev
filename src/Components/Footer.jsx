//Tranduction dependances
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const { Moretitle7 } = t("Footer");
  return (
    <div className="bg-[#221C27] flex justify-center items-baseline py-[50px] text-[#FFD43B] text-[20px] px-4 w-full">
      {Moretitle7}
    </div>
  );
}

export default Footer;
