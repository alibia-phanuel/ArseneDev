//Tranduction dependances
import { useTranslation } from "react-i18next";

function Udate() {
  const { t } = useTranslation();
  const {
    projetTitleOne,
    // projetTitleTwo,
    // projetDescOne,
    // projetDescTwo,
    projetDescThree,
  } = t("skills");

  return (
    <div className="bg-[#313552] h-full flex justify-center px-4">
      <div className="my-20  container">
        <h1 className=" my-10 font-[roboto] text-[#FFD43B] text-[30px] capitalize">
          {projetTitleOne}
        </h1>
        <div className="skils font-[roboto] flex  gap-4 flex-wrap">
          {/**udate test */}
          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="titre my-4 font-bold text-[24px] text-[#FFD43B]">
              Alibia
            </div>
            <div className="description">{projetDescThree}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udate;
