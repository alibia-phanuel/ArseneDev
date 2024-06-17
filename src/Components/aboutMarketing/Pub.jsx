import campagneOne from "../../assets/marketing/01campagne.png";
import campagneTwo from "../../assets/marketing/02enssemble.png";
import campagneThree from "../../assets/marketing/03pub.png";
import scriptProduct from "../../assets/marketing/05script.png";
import ads from "../../assets/marketing/ads.jpeg";
import message from "../../assets/marketing/wat.jpg";
import { useTranslation } from "react-i18next";
import Resaux from "../Resaux";
import Footer from "../Footer";

function Pub() {
  const { t } = useTranslation();
  const { back, titleOnes, titleTwos, titleTrees, pub, Ai, results } =
    t("aboutMarketing");
  return (
    <div>
      <div className=" bg-[#313552] flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col bg-[#111111] ">
          <div className="h-full w-full bg-[#1b1d297d]">
            <img src={ads} />
          </div>
        </div>
        <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white ">
          <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
            <div>
              <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
                <a href="/#Réalisations">{back}</a>
              </button>
            </div>
            <div>
              <h1 className="text-[40px] capitalize font-bold ">{titleOnes}</h1>
              <p className="text-[#FFD43B]"> Marketing</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-wrap p-4">
          <div>
            <p className="text-white font-bold mt-4 text-[20px] bg-[#111]  py-4 pl-3">
              {titleTwos}
            </p>
            <img src={campagneOne} className=" shadow-lg"></img>
          </div>

          <div>
            <p className="text-white font-bold mt-4 text-[20px] bg-[#111]  py-4 pl-3">
              {titleTrees}
            </p>
            <img src={campagneTwo} className=" shadow-lg"></img>
          </div>

          <div>
            <p className="text-white font-bold mt-4 text-[20px] bg-[#111]  py-4 pl-3">
              {pub}
            </p>
            <img src={campagneThree} className=" shadow-lg"></img>
          </div>

          <div>
            <p className="text-white font-bold mt-4 text-[20px] bg-[#111]  py-4 pl-3">
              {Ai}
            </p>
            <img src={scriptProduct} className=" shadow-lg"></img>
          </div>

          <div>
            <p className="text-white font-bold mt-4 text-[20px] bg-[#111]  py-4 pl-3">
              {results}
            </p>
            <img src={message} className=" shadow-lg"></img>
          </div>
        </div>

        <div className="bg-[#000] w-full">
          <Resaux />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Pub;
