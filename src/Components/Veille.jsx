import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from "../assets/ve/1.png";
import image2 from "../assets/ve/2.png";
import image3 from "../assets/ve/3.png";
import image4 from "../assets/ve/4.png";
import image5 from "../assets/ve/5.png";
import image6 from "../assets/ve/6.png";
import image7 from "../assets/ve/7.png";
import image8 from "../assets/ve/8.png";
import image9 from "../assets/ve/9.png";
import image10 from "../assets/ve/10.png";
import image11 from "../assets/ve/11.png";
//Tranduction dependances
import { useTranslation } from "react-i18next";
const cards = [
  {
    url: image1,
    title: `OpenAI`,
    link: "https://www.youtube.com/@OpenAI",
    id: 1,
  },
  {
    url: image2,
    title: "Web",
    link: "https://grafikart.fr/cursus",
    id: 2,
  },
  {
    url: image3,
    title: "Design.UI",
    link: "https://www.youtube.com/@BastiUi",
    id: 3,
  },
  {
    url: image4,
    title: "Meta ",
    link: "https://www.youtube.com/@meta",

    id: 4,
  },
  {
    url: image5,
    title: "Google Analytics",
    link: "https://www.youtube.com/@GoogleAnalytics",
    id: 5,
  },
  {
    url: image6,
    title: "Marketing",
    link: "https://www.youtube.com/@YomiDenzel",

    id: 6,
  },
  {
    url: image7,
    title: "Web",
    link: "https://www.youtube.com/@ParfaitementWeb",

    id: 7,
  },

  {
    url: image8,
    title: "Web",
    link: "https://www.youtube.com/@Teachersdunet",

    id: 8,
  },

  {
    url: image9,
    title: "Videos",
    link: "https://www.youtube.com/@strategie-video",
    id: 9,
  },
  {
    url: image10,
    title: "Web",
    link: "https://www.youtube.com/@EcoleduWeb",
    id: 10,
  },
  {
    url: image11,
    title: "Web",
    link: "https://www.youtube.com/@developedbyed",
    id: 11,
  },
];

const Example = () => {
  const { t } = useTranslation();
  const { Sectitle8 } = t("FullStack");
  return (
    <div className="bg-[#221C27]  px-4">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-[#FFD43B] text-[20px] text-center">
          {Sectitle8} <br />
          <i className="fa-solid fa-mug-hot relative top-5 text-[50px] "></i>
        </span>
      </div>
      <HorizontalScrollCarousel />
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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
      className="group relative h-[450px]   w-[450px] overflow-hidden bg-neutral-200 shadow-2xl  rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <a href={card.link} target="_blank">
          <p className="rounded-lg bg-gradient-to-br from-white/20 to-white/0 p-8 text-[40px] font-black  text-white backdrop-blur-lg cursor-pointer text-center">
            {card.title} <br />
            <i className="fa-brands fa-youtube text-[#c44141] relative top-5 text-[40px] bg-white rounded-full p-2"></i>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Example;
