import { motion } from "framer-motion";
//navigation
//Tranduction dependances
import { useNavigate } from "react-router-dom";
//importation image
import html1 from "../assets/htmlcss-1/pc.png";
import html2 from "../assets/1.png";
import figmat from "../assets/figmat.png";
import folio from "../assets/2b.png";
import plante from "../assets/plante/1.png";
import type from "../assets/typescript.png";
import univers from "../assets/3d/3d.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/nextjs.png";
import acc from "../assets/tailwindCss/acc.png";
import three from "../assets/three.png";
import video from "../assets/videos/videphone.mp4";
import projet from "../assets/plante/project.png";
import webUx from "../assets/ve/pcuxviseo.mp4";
//Tranduction dependances
import { useTranslation } from "react-i18next";
// Fin importation image
import { useRef, useEffect, useState } from "react";
function ProjetFront() {
  const navigae = useNavigate();

  function rotato() {
    navigae("/rotato");
  }

  function Designer() {
    navigae("/designer ");
  }
  function isdevexperts() {
    navigae("/isdevexpert");
  }
  function handleClick() {
    navigae("/Plante");
  }
  function digital() {
    navigae("/Digital");
  }
  ThreeJs;
  function coofe() {
    navigae("/Coofe");
  }
  function ThreeJs() {
    navigae("/ThreeJs");
  }
  function Felipe() {
    navigae("/Felipe");
  }

  function Mark() {
    navigae("/Mark");
  }

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const { t } = useTranslation();
  const {
    twoo,
    tree,
    tree2,
    u,
    ux,
    Sectitle5,
    Sectitle7,
    Sectitle8,
    Sectitle9,
    Sectitle10,
    Sectitle11,
  } = t("Projects");
  const { Sectitle6 } = t("FullStack");

  const { Sectitle12 } = t("Projects");
  const { isdevexpertDesceiption } = t("aboutFront");
  return (
    <div className="bg-no-repeat  bg-fixed  bg-center bg-cover  w-[100%] bg-[#313552] py-[100px]">
      <div className="w-full font-[roboto] h-full  flex justify-center items-center px-4">
        <div className=" w-full container  flex  justify-center flex-col relative  ">
          <h1
            className="roboto text-[#FFD43B] text-[20px] mb-9 font-bold "
            id="Réalisations "
          >
            {twoo}
          </h1>
          <motion.div
            ref={carousel}
            className="carousel cursor-grab overflow-hidden  bg-[#221C27] rounded"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel flex gap-4 bg-[#221C27] "
            >
              <div className="w-[450px] min-w-[30rem]  group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <video
                    className="group-hover:scale-[1.1]  transition-all"
                    width="640"
                    height="360"
                    controls
                    autoPlay
                    loop
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Tailwind CSS est un framework CSS open source."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      viewBox="0 0 240 234"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      height="2438"
                    >
                      <path
                        d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                        fill="#00005b"
                      />
                      <g fill="#99f">
                        <path d="M57 164V61c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1v32.1c.1.7-.4 1.3-1.1 1.4H58.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7v33.6c1.4.1 2.7.2 3.9.2H88c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM147 85.2h17.5c1 0 1.8.7 2.1 1.6.3.8.5 1.6.6 2.5.2 1 .4 2.1.5 3.1.1 1.1.2 2.3.2 3.6 3-3.5 6.6-6.4 10.7-8.6 4.6-2.6 9.9-3.9 15.2-3.9.7-.1 1.3.4 1.4 1.1v19.9c0 .8-.5 1.1-1.6 1.1-3.6-.1-7.3.2-10.8 1-2.9.6-5.7 1.5-8.4 2.7-1.9.9-3.7 2.1-5.1 3.7v51c0 1-.4 1.4-1.3 1.4h-19.7c-.8.1-1.5-.4-1.6-1.2v-55.8c0-2.4 0-4.9-.1-7.5s-.1-5.2-.2-7.8c0-2.3-.2-4.5-.4-6.8-.1-.5.2-1 .7-1.1 0-.1.2-.1.3 0z" />
                      </g>
                    </svg>
                  </div>

                  <div>
                    <svg
                      className="logo-svg"
                      fill="none"
                      height="46"
                      id="logo-svg"
                      width="107"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 33.215v-14.43h3.376v2.787c.247-.97.732-1.704 1.455-2.2a4.013 4.013 0 012.385-.773c.557 0 1 .04 1.331.123v3.097a11.757 11.757 0 00-1.331-.062c-1.198 0-2.137.444-2.819 1.332-.68.867-1.021 2.116-1.021 3.747v6.38H0zM22.965 31.45c-1.363 1.425-3.21 2.137-5.544 2.137-2.332 0-4.19-.712-5.574-2.137-1.362-1.445-2.044-3.262-2.044-5.45 0-2.189.682-3.995 2.044-5.42 1.383-1.445 3.242-2.167 5.574-2.167 2.333 0 4.181.722 5.544 2.168 1.383 1.424 2.075 3.23 2.075 5.419 0 2.188-.692 4.005-2.075 5.45zm-8.671-2.136c.763.846 1.806 1.27 3.127 1.27 1.322 0 2.354-.424 3.097-1.27.764-.847 1.146-1.951 1.146-3.314s-.382-2.467-1.146-3.314c-.743-.846-1.775-1.27-3.097-1.27-1.32 0-2.364.424-3.127 1.27-.744.847-1.115 1.951-1.115 3.314s.371 2.467 1.115 3.314zM34.66 30.366c.68 0 1.248-.04 1.703-.123v2.972c-.702.124-1.538.186-2.509.186a7.503 7.503 0 01-1.455-.124c-.413-.082-.898-.268-1.456-.557-.557-.31-.99-.836-1.3-1.58-.31-.743-.465-1.682-.465-2.817v-6.72h-2.446v-2.819h2.446v-4.366h3.376v4.366h3.313v2.818h-3.313v5.946c0 1.156.165 1.92.495 2.292.33.35.867.526 1.61.526zM45.323 33.587c-2.25 0-3.995-.712-5.234-2.137-1.239-1.424-1.858-3.241-1.858-5.45 0-2.189.65-3.995 1.951-5.42 1.3-1.445 3.045-2.167 5.234-2.167.97 0 1.858.206 2.663.62.805.412 1.424.98 1.858 1.702v-1.95h3.375v14.43h-3.375v-1.95c-.413.701-1.063 1.27-1.951 1.703a6.132 6.132 0 01-2.663.619zm.495-3.004c1.383 0 2.436-.433 3.159-1.3.743-.868 1.115-1.962 1.115-3.283s-.372-2.416-1.115-3.283c-.723-.867-1.776-1.3-3.159-1.3-1.3 0-2.333.433-3.097 1.3-.743.847-1.114 1.94-1.114 3.283 0 1.342.371 2.446 1.114 3.314.764.846 1.797 1.27 3.097 1.27zM64.176 30.366c.681 0 1.249-.04 1.703-.123v2.972c-.702.124-1.538.186-2.508.186a7.503 7.503 0 01-1.456-.124c-.413-.082-.898-.268-1.455-.557-.558-.31-.991-.836-1.3-1.58-.31-.743-.465-1.682-.465-2.817v-6.72h-2.447v-2.819h2.447v-4.366h3.375v4.366h3.314v2.818H62.07v5.946c0 1.156.165 1.92.495 2.292.33.35.868.526 1.61.526z"
                        fill="white"
                      ></path>
                      <path
                        clipRule="evenodd"
                        d="M84.456 38.529c8.804 0 15.941-7.137 15.941-15.941 0-8.804-7.137-15.941-15.94-15.941-8.805 0-15.942 7.137-15.942 15.941 0 8.804 7.137 15.941 15.941 15.941zm-5.11-20.45a6.801 6.801 0 119.619 9.619 2.126 2.126 0 003.006 3.006c4.316-4.316 4.316-11.314 0-15.63-4.317-4.317-11.315-4.317-15.63 0a2.126 2.126 0 003.005 3.005z"
                        fill="white"
                        fillRule="evenodd"
                      ></path>
                      <circle
                        cx="90.468"
                        cy="29.192"
                        fill="white"
                        r="1.488"
                        transform="rotate(45 90.468 29.192)"
                      ></circle>
                    </svg>
                  </div>
                </div>

                <div className="description my-3">{Sectitle12}</div>
                <button
                  onClick={rotato}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] "
                >
                  {Sectitle6}
                </button>
              </div>
              {/**isdev expert */}
              <div className="w-[450px] min-w-[30rem]  group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <video
                    className="group-hover:scale-[1.1]  transition-all"
                    width="640"
                    height="360"
                    controls
                    autoPlay
                    loop
                  >
                    <source src={webUx} type="video/mp4" />
                  </video>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Tailwind CSS est un framework CSS open source."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      viewBox="0 0 240 234"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      height="2438"
                    >
                      <path
                        d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                        fill="#00005b"
                      />
                      <g fill="#99f">
                        <path d="M57 164V61c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1v32.1c.1.7-.4 1.3-1.1 1.4H58.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7v33.6c1.4.1 2.7.2 3.9.2H88c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM147 85.2h17.5c1 0 1.8.7 2.1 1.6.3.8.5 1.6.6 2.5.2 1 .4 2.1.5 3.1.1 1.1.2 2.3.2 3.6 3-3.5 6.6-6.4 10.7-8.6 4.6-2.6 9.9-3.9 15.2-3.9.7-.1 1.3.4 1.4 1.1v19.9c0 .8-.5 1.1-1.6 1.1-3.6-.1-7.3.2-10.8 1-2.9.6-5.7 1.5-8.4 2.7-1.9.9-3.7 2.1-5.1 3.7v51c0 1-.4 1.4-1.3 1.4h-19.7c-.8.1-1.5-.4-1.6-1.2v-55.8c0-2.4 0-4.9-.1-7.5s-.1-5.2-.2-7.8c0-2.3-.2-4.5-.4-6.8-.1-.5.2-1 .7-1.1 0-.1.2-.1.3 0z" />
                      </g>
                    </svg>
                  </div>

                  <div className="w-[43px] h-[43px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 2500 2437.5"
                      viewBox="0 0 2500 2437.5"
                      id="adobe-xd"
                    >
                      <path
                        fill="#ff26be"
                        d="M2057.3,2437.5H442.7C197.9,2437.5,0,2239.6,0,1994.8V442.7C0,197.9,197.9,0,442.7,0h1614.6
	C2302.1,0,2500,197.9,2500,442.7v1552.1C2500,2239.6,2302.1,2437.5,2057.3,2437.5z"
                      ></path>
                      <path
                        fill="#2e001f"
                        d="M2017.7,2333.3H482.3c-208.3,0-378.1-169.8-378.1-378.1V482.3c0-208.3,169.8-378.1,378.1-378.1h1534.4
	c209.4,0,378.1,169.8,378.1,378.1v1471.9C2395.8,2163.5,2226,2333.3,2017.7,2333.3L2017.7,2333.3z"
                      ></path>
                      <path
                        fill="#ffd9f2"
                        d="M988.5,1140.6l291.7,560.4c5.2,8.3,2.1,16.7-6.3,16.7h-181.3c-11.5,0-16.7-3.1-21.9-13.5
	c-66.7-137.5-134.4-275-204.2-422.9h-2.1c-62.5,139.6-131.3,286.5-197.9,424c-5.2,8.3-10.4,11.5-18.8,11.5H476
	c-10.4,0-11.5-8.3-6.2-14.6l285.4-543.8l-276-550c-6.3-8.3,0-14.6,6.2-14.6h179.2c10.4,0,14.6,2.1,18.7,11.5
	c65.6,137.5,132.3,279.2,194.8,417.7h2.1c60.4-137.5,127.1-280.2,191.7-416.7c5.2-8.3,8.3-13.5,18.8-13.5h167.7
	c8.3,0,11.5,6.3,6.3,14.6L988.5,1140.6z M1331.3,1310.4c0-242.7,161.5-432.3,417.7-432.3c21.9,0,33.3,0,54.2,2.1v-276
	c0-6.3,5.2-10.4,10.4-10.4h164.6c8.3,0,10.4,3.1,10.4,8.3v956.3c0,28.1,0,63.5,5.2,102.1c0,6.3-2.1,8.3-8.3,11.5
	c-87.5,41.7-179.2,60.4-266.7,60.4C1492.7,1733.3,1331.2,1593.8,1331.3,1310.4L1331.3,1310.4z M1803.1,1043.8
	c-14.6-6.3-35.4-10.4-60.4-10.4c-131.3,0-222.9,101-222.9,268.8c0,191.7,93.8,268.8,211.5,268.8c25,0,52.1-3.1,71.9-11.5V1043.8z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="description my-3">{ux}</div>
                <button
                  onClick={Designer}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] "
                >
                  {Sectitle6}
                </button>
              </div>

              {/**isdev expert */}
              {/**Fin adobe xd projet */}
              <div className="w-[450px] min-w-[30rem]  group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={projet}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Next.js étant qualifié de framework React pour la production."
                    className="w-[50px] h-[50px] flex justify-center items-center bg-white px-2 rounded-md"
                  >
                    <div>
                      <img src={next} alt="" />
                    </div>
                  </div>
                  <div
                    title="Tailwind CSS est un framework CSS open source."
                    className="w-[50px] h-[50px] flex justify-center items-center bg-white px-2 rounded-md"
                  >
                    <div>
                      <img src={tailwind} alt="" />
                    </div>
                  </div>
                </div>

                <div className="description my-3">{isdevexpertDesceiption}</div>
                <button
                  onClick={isdevexperts}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] "
                >
                  {Sectitle6}
                </button>
              </div>
              {/**Fin adobe xd projet */}
              <div className="w-[450px] min-w-[30rem]  group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={plante}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Figma est une plateforme collaborative pour éditer des graphiques vectoriels et faire du prototypage."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={figmat}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Tailwind CSS est un framework CSS open source."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={tailwind}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="est un langage qui peut être vu comme une version du JavaScript."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={type}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
                  </div>
                  <div
                    title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                    className="text-[50px] text-[#53C1DE]"
                  >
                    <i className="fa-brands fa-react"></i>
                  </div>
                </div>

                <div className="description my-3">{Sectitle5}</div>
                <button
                  onClick={handleClick}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] "
                >
                  {Sectitle6}
                </button>
              </div>

              <div className="w-[450px] min-w-[30rem] group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={acc}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Figma est une plateforme collaborative pour éditer des graphiques vectoriels et faire du prototypage."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={figmat}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Tailwind CSS est un framework CSS open source."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={tailwind}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                </div>

                <div className="description my-3">{Sectitle7}</div>
                <button
                  onClick={digital}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>

              <div className="w-[450px] group  min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  rounded overflow-hidden">
                  <img
                    src={folio}
                    alt=""
                    className="rounded group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Le CSS (feuilles de style en cascade) est un langage qui permet de décrire l’apparence d’une page. Il permet de cibler différents éléments HTML pour décrire ensuite leur présentation."
                    className="text-[50px] text-[#1572B6]"
                  >
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                  <div
                    title="JavaScript (souvent abrégé en JS) est un langage de programmation pensé pour rendre les pages web interactives."
                    className="text-[50px] text-[#F7DF1E]"
                  >
                    <i className="fa-brands fa-js"></i>
                  </div>
                </div>

                <div className="description my-3">{Sectitle8}</div>
                <button
                  onClick={Mark}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>
              <div className=" w-[450px] group  min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={html1}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="Figma est une plateforme collaborative pour éditer des graphiques vectoriels et faire du prototypage."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={figmat}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Le CSS (feuilles de style en cascade) est un langage qui permet de décrire l’apparence d’une page. Il permet de cibler différents éléments HTML pour décrire ensuite leur présentation."
                    className="text-[50px] text-[#1572B6]"
                  >
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                </div>

                <div className="description my-3">{Sectitle9}</div>
                <button
                  onClick={coofe}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>

              <div className=" w-[450px] min-w-[30rem]   group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  overflow-hidden ">
                  <img
                    src={univers}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {u} {""}
                  <span className="text-[#FFD43B]">3d</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="JavaScript (souvent abrégé en JS) est un langage de programmation pensé pour rendre les pages web interactives."
                    className="text-[50px] text-[#F7DF1E]"
                  >
                    <i className="fa-brands fa-js"></i>
                  </div>
                  <div
                    title="est une bibliothèque JavaScript pour créer des scènes 3D dans un navigateur web. "
                    className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-lg"
                  >
                    <img
                      src={three}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                </div>

                <div className="description my-3">{Sectitle10}</div>
                <button
                  onClick={ThreeJs}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>
              <div className="w-[450px] min-w-[30rem] group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={html2}
                    alt=""
                    className="group-hover:scale-[1.1]  transition-all"
                  ></img>
                </div>

                <div className="titre my-4 font-bold text-[24px] ">
                  {tree} {""}
                  <span className="text-[#FFD43B]">{tree2}</span>
                </div>

                <div className="icones-language flex items-center gap-4 flex-wrap">
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Le CSS (feuilles de style en cascade) est un langage qui permet de décrire l’apparence d’une page. Il permet de cibler différents éléments HTML pour décrire ensuite leur présentation."
                    className="text-[50px] text-[#1572B6]"
                  >
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                </div>

                <div className="description my-3">{Sectitle11}</div>
                <button
                  onClick={Felipe}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjetFront;
