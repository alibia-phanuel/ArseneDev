import marketin from "../../assets/marketing/marketing.jpg";
import pageFacebook from "../../assets/marketing/page01.png";
import pageInstagramm from "../../assets/marketing/page02.png";
//Tranduction dependances
import { useTranslation } from "react-i18next";
import Resaux from "../Resaux";
import Footer from "../Footer";
function Page() {
  const { t } = useTranslation();
  const { back, titleTwo, descriptiontTwo, otherOne, otherTwo } =
    t("aboutMarketing");
  return (
    <div>
      <div className=" bg-[#313552]">
        <div className="flex justify-center flex-col bg-[#111111] ">
          <div className="h-full w-full bg-[#1b1d297d]">
            <img src={marketin} />
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
              <h1 className="text-[40px] capitalize font-bold">{titleTwo}</h1>
              <p className="text-[#FFD43B]"> Marketing</p>
            </div>
            <div className="flex gap-4">
              <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
                <a
                  href="https://www.facebook.com/alibia2023/"
                  target="__blanck"
                >
                  {otherOne}
                </a>
              </button>
              <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
                <a
                  href="https://www.instagram.com/alibia_2023/"
                  target="__blanck"
                >
                  {otherTwo}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
          <div className="container flex items-center  justify-between flex-col px-4  ">
            <div className="rounded-lg">
              <img className="my-2" src={pageFacebook} />
              <img className="my-2" src={pageInstagramm} />
            </div>

            <div className="  px-4  py-10  w-full text-xl flex justify-center items-center">
              {descriptiontTwo}
            </div>
          </div>
        </div>
        <Resaux />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
