import Resaux from "../Resaux";
import Footer from "../Footer";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

//Tranduction dependances
import { useTranslation } from "react-i18next";
const cards = [
  {
    link: "https://www.youtube.com/watch?v=TcLXBHNsF5A",
    id: 1,
  },
  {
    link: "https://grafikart.fr/cursus",
    id: 2,
  },
  {
    link: "https://www.youtube.com/@BastiUi",
    id: 3,
  },
  {
    link: "https://www.youtube.com/@meta",
    id: 4,
  },
];

function AlibiaV2() {
  return (
    <div>
      <div className="bg-[#313552]   justify-center items-center flex fixed w-full  shadow-xl">
        <div className="container flex relative items-center font-[roboto] py-4 px-6 border-b-2 border-[#FFD43B]">
          <nav className="text-[#ffffff] relative capitalize flex justify-between items-center max-[446px]:gap-2 flex-wrap w-full max-md:justify-center">
            <div className=" italic  font-bold text-[30px] text-[#FFD43B]">
              <a href="/">AT</a>
            </div>
            <div className="flex justify-center items-center gap-8 py-1 flex-wrap max-md:gap-4">
              <a
                href="#intro"
                className="border-b-2 transition-all border-[#FFD43B]"
              >
                introduction
              </a>
              <a
                href="#front"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                Front-end
              </a>
              <a
                href="#back"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                back-end
              </a>
              <a
                href="#com"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                communication
              </a>
              <a
                href="#Mark"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                Marketing
              </a>
              <a
                href="#conclu"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                conclusion
              </a>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <div className="w-[12px] bg-green-500 h-[12px] rounded-full"></div>
              <a href="https://alibia.net/" target="_blanc">
                voir le site
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div id="intro" className="h-screen bg-[#221C27]"></div>
      <div id="front" className="h-screen bg-[#313552]">
        1
      </div>
      <div id="back" className="h-screen bg-[#221C27]">
        1
      </div>
      <div id="com" className="h-screen bg-[#313552]">
        1
      </div>
      <div id="Mark" className="h-screen bg-[#221C27]"></div>
      <div id="conclu" className="h-screen bg-[#313552]">
        1
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default AlibiaV2;
