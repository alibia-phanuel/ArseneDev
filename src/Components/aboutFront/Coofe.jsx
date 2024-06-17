import map from "../../assets/map.jpg";
import Resaux from "../Resaux";
import Footer from "../Footer";
import coofe from "../../assets/htmlcss-1/coofe.png";
import { useTranslation } from "react-i18next";

function Coofe() {
      const { t } = useTranslation();
      const { back, see, titleFoor, descriptiontFoor } = t("aboutFront");
  return (
    <div className=" bg-[#313552]">
      <div className="flex justify-center flex-col bg-[#111111]  ">
        <div
          style={{
            backgroundImage: `url(${map})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundAttachment: "fixed",
          }}
          className="h-[50vh] w-full flex justify-center"
        >
          <div className="h-full w-full bg-[#1b1d297d]"></div>
        </div>
      </div>
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="/#Réalisations">{back}</a>
            </button>
          </div>
          <div>
            <h1 className="text-[40px] capitalize font-bold">{titleFoor}</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="https://site-coffe.vercel.app/" target="__blanck">
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
              src={coofe}
            ></img>
          </div>
          <div className="  px-4  py-10  w-full text-xl">
            {descriptiontFoor}
          </div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default Coofe;
