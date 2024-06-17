import model from "../../assets/3d/3d.png";
import AboutBanner from "../AboutBanner";
import Resaux from "../Resaux";
import Footer from "../Footer";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function ThreeJs() {
  const { t } = useTranslation();
  const { u, Sectitle10 } = t("Projects");

  const { back, see } = t("aboutFront");
  return (
    <div className="bg-[#313552]">
      <AboutBanner />
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="/#Réalisations">{back}</a>
            </button>
          </div>
          <div>
            <h1 className="text-[40px] capitalize font-bold">{u}</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a
                href="https://univers3d-arsene-s-projects-8c9ad5e5.vercel.app/"
                target="__blanck"
              >
                {see}
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={model}
            ></img>
          </div>
          <div className="  px-4  py-10  w-full text-xl">{Sectitle10}</div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default ThreeJs;
