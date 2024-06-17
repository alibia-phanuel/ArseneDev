import Resaux from "../Resaux";
import Footer from "../Footer";
import videoOne from "../../assets/videos/oneBlanc.mp4";
import intro from "../../assets/videos/intros.mp4";
import imageOne from "../../assets/videos/images/one.png";
import imageTwoo from "../../assets/videos/images/twoo.png";
import { useTranslation } from "react-i18next";

function Rotato() {
  const { t } = useTranslation();
  const { Sectitle12, about, titleRotato, RetourRotato } = t("Projects");
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
            <h1 className="text-[40px] capitalize font-bold">{titleRotato}</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="https://www.youtube.com/@rotatoapp" target="__blanck">
                {about}
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white ">
        <div className="container flex items-center  justify-between flex-col px-4 gap-8  ">
          <div className="rounded-lg">
            <video
              className="group-hover:scale-[1.1]  rounded-lg  transition-all"
              width="640"
              height="360"
              controls
              autoPlay
              loop
            >
              <source src={videoOne} type="video/mp4" />
            </video>
          </div>
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={imageOne}
              alt="imageOne"
            />
          </div>
          <div className="rounded-lg">
            <video
              className="group-hover:scale-[1.1]  rounded-lg  transition-all"
              width="640"
              height="360"
              controls
              autoPlay
              loop
            >
              <source src={intro} type="video/mp4" />
            </video>
          </div>
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={imageTwoo}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="  px-4  py-10  w-full text-xl">{Sectitle12}</div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default Rotato;
