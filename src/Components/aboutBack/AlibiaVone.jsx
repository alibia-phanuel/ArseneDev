import alibiav1 from "../../assets/alibia-v1/alibia-alibia.png";
import Resaux from "../Resaux";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AlibiaVone() {
  const navigae = useNavigate();
  const { t } = useTranslation();
  const { alibiadescriptonv1, alibiaActionv1, RetourRotato, alibiaTitlev1 } =
    t("Projects");

  function Alibiav2() {
    navigae("/Alibiav2");
  }
  return (
    <div>
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="/#Réalisations">{RetourRotato}</a>
            </button>
          </div>
          <div>
            <h1 className="text-[40px] capitalize font-bold">
              {alibiaTitlev1}
            </h1>
          </div>
          <div>
            <button
              onClick={Alibiav2}
              className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] "
            >
              {alibiaActionv1}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white ">
        <div className="container flex items-center  justify-between flex-col px-4 gap-8  ">
          <div className="rounded-lg">
            <img
              src={alibiav1}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="  px-4  py-10  w-full text-xl">
            {alibiadescriptonv1}
          </div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default AlibiaVone;
