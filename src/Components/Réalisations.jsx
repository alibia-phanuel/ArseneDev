import bg from "../assets/react-logo-.jpg";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function Realisations() {
  const { t } = useTranslation();
  const { one } = t("Projects");
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-no-repeat h-[300px] bg-fixed  bg-center bg-cover "
    >
      <div className="w-full h-full bg-[#221c27cd] flex justify-center items-center">
        <div className="container">
          <h1
            className="px-4 roboto text-[#FFD43B] text-[30px]"
            id="Réalisations"
          >
            {one}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Realisations;
