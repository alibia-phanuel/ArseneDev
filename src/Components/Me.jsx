//Tranduction dependances
import { useTranslation } from "react-i18next";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Resaux from "./Resaux";
import image1 from "../assets/other/1.jpg";
import image2 from "../assets/other/2.jpg";
import image3 from "../assets/other/3.jpg";
import image4 from "../assets/other/4.jpg";
import image5 from "../assets/other/5.jpg";
import image6 from "../assets/other/6.jpg";
import image7 from "../assets/other/7.jpg";
import image8 from "../assets/other/8.jpg";
import image9 from "../assets/other/9.jpg";
import image10 from "../assets/other/10.jpg";
const cards = [
  {
    url: image1,
    title: <i className="fa-solid fa-wrench"></i>,
    id: 1,
  },
  {
    url: image2,
    title: <i className="fa-solid fa-microchip"></i>,
    id: 2,
  },
  {
    url: image3,
    title: <i className="fa-solid fa-dumbbell"></i>,
    link: "",
    id: 3,
  },
  {
    url: image4,
    title: <i className="fa-solid fa-code"></i>,
    id: 4,
  },
  {
    url: image5,
    title: <i className="fa-solid fa-business-time"></i>,
    id: 5,
  },
  {
    url: image6,
    title: <i className="fa-solid fa-plane"></i>,

    id: 6,
  },
  {
    url: image7,
    title: <i className="fa-solid fa-globe"></i>,

    id: 7,
  },

  {
    url: image8,
    title: <i className="fa-brands fa-youtube"></i>,
    link: "",

    id: 8,
  },

  {
    url: image9,
    title: <i className="fa-solid fa-camera"></i>,
    id: 9,
  },
  {
    url: image10,
    title: <i className="fa-solid fa-video"></i>,
    link: "",
    id: 10,
  },
];

const Me = () => {
  const { t } = useTranslation();
  const { Sectitle9 } = t("FullStack");
  return (
    <div className="bg-[#221C27]">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-[#FFD43B] text-[20px] text-center">
          {Sectitle9} <br />
          <i className="fa-solid fa-headphones  relative top-5 text-[50px]"></i>
        </span>
      </div>
      <HorizontalScrollCarousel />
      <Resaux />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#313552]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 shadow-2xl rounded-lg "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
      <div className="absolute  right-[170px]  top-[300px] inset-0 z-10 grid place-content-center">
        <a href={card.link} target="_blank">
          <p className="rounded-lg text-[#FFD43B] bg-gradient-to-br from-white/20 to-white/0 p-8 text-[40px] font-black   backdrop-blur-lg cursor-pointer text-center">
            {card.title} <br />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Me;
