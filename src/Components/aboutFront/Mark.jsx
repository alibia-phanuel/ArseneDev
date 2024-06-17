import AboutBanner from "../AboutBanner";
import Resaux from "../Resaux";
import Footer from "../Footer";
//image
import mark1 from "../../assets/plante/p1.png";
import mark2 from "../../assets/plante/p2.png";
import mark3 from "../../assets/plante/p3.png";
import mark4 from "../../assets/plante/p4.png";
import mark5 from "../../assets/plante/p5.png";
import mark6 from "../../assets/plante/p6.png";
import { useTranslation } from "react-i18next";
function Mark() {
    const { t } = useTranslation();
    const { back, see, titleTree, descriptiontTree } = t("aboutFront");
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
            <h1 className="text-[40px] capitalize font-bold">{titleTree}</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="https://mark-antony-folio.vercel.app/" target="__blanck">
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
              src={mark1}
            ></img>
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={mark2}
            ></img>{" "}
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={mark3}
            ></img>
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={mark4}
            ></img>
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={mark5}
            ></img>
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={mark6}
            ></img>
          </div>
          <div className="  px-4  py-10  w-full text-xl">
            {descriptiontTree}
          </div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default Mark;
