import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

//importation image
import tailwind from "../assets/tailwind.png";
import Insomnia from "../assets/Insomnia.png";
import vscode from "../assets/vscode.png";
import crud from "../assets/imgBack-end/creudone.png";
import meta from "../assets/meta.png";
import alibiav1 from "../assets/alibia-v1/alibia-alibia.png";
import promtopia from "../assets/Proptopia/1a.png";

// import node from "../assets/alibia-v1/node.png";
import express from "../assets/express.png";

import alibiaNew from "../assets/alibia-v1/alibiaNew.png";
// import meta from "../assets/meta.png";
//Tranduction dependances
import { useTranslation } from "react-i18next";
// Fin importation image
import { useRef, useEffect, useState } from "react";

function BackEnd() {
  const navigae = useNavigate();
  function Crud() {
    navigae("/Crud");
  }
  function Alibiav1() {
    navigae("/Alibiav1");
  }

  function Alibiav2() {
    navigae("/Alibiav2");
  }
  function Promptopia() {
    navigae("/promptopia");
  }
  const { t } = useTranslation();
  const { Sectitle1, Sectitle2, Sectitle6 } = t("FullStack");
  const { tree, tree2 } = t("Projects");
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="bg-no-repeat  bg-fixed  bg-center bg-cover  w-[100%] bg-[#313552] font-[roboto] py-[100px]">
      <div className="w-full h-full  flex justify-center items-center px-4">
        <div className=" w-full container  flex  justify-center flex-col relative  ">
          <h1
            className="roboto text-[#FFD43B] text-[20px] mb-9 font-bold  capitalize"
            id="Réalisations "
          >
            {Sectitle1} <span className="text-white">{Sectitle2}</span>
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
              <div className="w-[450px] flex flex-col justify-between group min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  rounded overflow-hidden">
                  <img
                    src={promtopia}
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
                    title="Postman est un logiciel qui va vous permettre d’appeler / tester une API.."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      height="1024pt"
                      viewBox=".5 -.2 1023 1024.1"
                      width="1024pt"
                    >
                      <path
                        fill="#fff"
                        d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
                      />
                      <path
                        fill="#fff"
                        d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
                      />
                    </svg>
                  </div>

                  <div
                    title="SQL, pour Structured Query Language, est un langage qui permet d'interroger une base de données relationnelle afin de pouvoir modifier ou récupérer des informations."
                    className="text-[50px] text-[#0076BF]"
                  >
                    <svg width="64" height="64" viewBox="0 0 32 32">
                      <path
                        d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z"
                        fill="#599636"
                      />
                      <path
                        d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z"
                        fill="#6cac48"
                      />
                      <path
                        d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
                        fill="#c2bfbf"
                      />
                    </svg>
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

                <button
                  onClick={Promptopia}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>

              {/**PROMTOPIA */}
              <div className="w-[450px] flex flex-col justify-between group min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  rounded overflow-hidden">
                  <img
                    src={crud}
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
                    title="Postman est un logiciel qui va vous permettre d’appeler / tester une API.."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      height="264"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 264"
                      width="256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <path
                          d="m45.9853445 256.455035-45.9853445 1.59526 23.5727668-23.967452 22.4144135 22.374027z"
                          fill="#f15a24"
                        />
                        <path
                          d="m254.580742 137.579706c-8.543545 66.613581-69.475503 113.676506-136.07807 105.123783-66.6135802-8.54538-113.6765055-69.475503-105.1329609-136.083576 8.5490519-66.6117454 69.46816-113.68017787 136.0872479-105.12561877 66.609909 8.54170887 113.683849 69.47733867 105.123783 136.08357677"
                          fill="#f15a24"
                        />
                        <path
                          d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288"
                          fill="#999"
                        />
                        <path
                          d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                          fill="#666"
                        />
                        <path
                          d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.201"
                        />
                        <path
                          d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866"
                          fill="#ff931e"
                        />
                        <path
                          d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                          fill="#999"
                        />
                        <path
                          d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                          fill="#f15a24"
                        />
                        <path
                          d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984"
                          fill="#999"
                        />
                        <path
                          d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623"
                          fill="#666"
                        />
                        <path
                          d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623zm-5.38974-19.2752941s2.568204 6.3076106-.690239 11.2145497z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597"
                          fill="#666"
                        />
                        <path
                          d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597m-17.9700814-16.384 37.4803508 35.273788"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    title="Node.js est une plateforme de développement Javascript"
                    className="text-[50px] text-[#69A15C]"
                  >
                    <i className="fa-brands fa-node"></i>
                  </div>
                  <div
                    title="Express.js est un framework pour construire des applications web basées sur Node.js"
                    className=" rounded-lg w-[60px] h-[60px] flex justify-center bg-white items-center"
                  >
                    <img
                      src={express}
                      alt="logo"
                      className="w-full object-cover mx-4"
                    ></img>
                  </div>
                  <div
                    title="SQL, pour Structured Query Language, est un langage qui permet d'interroger une base de données relationnelle afin de pouvoir modifier ou récupérer des informations."
                    className="text-[50px] text-[#0076BF]"
                  >
                    <i className="fa-solid fa-database"></i>
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
                    title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                    className="text-[50px] text-[#53C1DE]"
                  >
                    <i className="fa-brands fa-react"></i>
                  </div>
                </div>

                <button
                  onClick={Crud}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>

              {/**CRUD */}
              <div className="w-[450px] flex flex-col justify-between group min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  rounded overflow-hidden">
                  <img
                    src={alibiav1}
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
                    title="Insomnia est une application qui permet de tester ses API et de créer des document OpenAPI."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={Insomnia}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="PHP est un langage de script qui est particulièrement adapté au développement web. Rapide et flexible il intègre tous les outils nécessaires à la création de sites dynamiques."
                    className="text-[50px] text-[#505E9B] w-[50px] h-[50px] flex justify-center items-center bg-white p-[30px] rounded-lg"
                  >
                    <i className="fa-brands fa-php"></i>
                  </div>
                  <div
                    title="SQL, pour Structured Query Language, est un langage qui permet d'interroger une base de données relationnelle afin de pouvoir modifier ou récupérer des informations."
                    className="text-[50px] text-[#0076BF]"
                  >
                    <i className="fa-solid fa-database"></i>
                  </div>
                  <div
                    title="JavaScript (souvent abrégé en JS) est un langage de programmation pensé pour rendre les pages web interactives."
                    className="text-[50px] text-[#F7DF1E]"
                  >
                    <i className="fa-brands fa-js"></i>
                  </div>
                  <div
                    title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                    className="text-[50px] text-[#E44D26]"
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    title="Bootstrap est une collection d'outils utiles à la création du design de sites et d'applications web."
                    className="text-[50px] text-[#FFFFFF]"
                  >
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>
                  <div
                    title="est une multinationale américaine fondée en 2004 par Mark Zuckerberg."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={meta}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
                  </div>
                  <div
                    title="Google Analytics est un service gratuit d'analyse d'audience d'un site Web ou d'applications "
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      viewBox="0 0 1024 1176.463"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ed750a"
                    >
                      <path d={analytics} />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={Alibiav1}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>
              <div className="group w-[450px] flex flex-col justify-between min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={alibiaNew}
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
                    title="Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS"
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={vscode}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>

                  <div
                    title="Postman est un logiciel qui va vous permettre d’appeler / tester une API.."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      height="264"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 264"
                      width="256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <path
                          d="m45.9853445 256.455035-45.9853445 1.59526 23.5727668-23.967452 22.4144135 22.374027z"
                          fill="#f15a24"
                        />
                        <path
                          d="m254.580742 137.579706c-8.543545 66.613581-69.475503 113.676506-136.07807 105.123783-66.6135802-8.54538-113.6765055-69.475503-105.1329609-136.083576 8.5490519-66.6117454 69.46816-113.68017787 136.0872479-105.12561877 66.609909 8.54170887 113.683849 69.47733867 105.123783 136.08357677"
                          fill="#f15a24"
                        />
                        <path
                          d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288"
                          fill="#999"
                        />
                        <path
                          d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                          fill="#666"
                        />
                        <path
                          d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.201"
                        />
                        <path
                          d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866"
                          fill="#ff931e"
                        />
                        <path
                          d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                          fill="#999"
                        />
                        <path
                          d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                          fill="#f15a24"
                        />
                        <path
                          d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984"
                          fill="#999"
                        />
                        <path
                          d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623"
                          fill="#666"
                        />
                        <path
                          d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623zm-5.38974-19.2752941s2.568204 6.3076106-.690239 11.2145497z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                        <path
                          d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597"
                          fill="#666"
                        />
                        <path
                          d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597m-17.9700814-16.384 37.4803508 35.273788"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.918"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    title="Node.js est une plateforme de développement Javascript"
                    className="text-[50px] text-[#69A15C]"
                  >
                    <i className="fa-brands fa-node"></i>
                  </div>
                  <div
                    title="Express.js est un framework pour construire des applications web basées sur Node.js"
                    className=" rounded-lg w-[60px] h-[60px] flex justify-center bg-white items-center"
                  >
                    <img
                      src={express}
                      alt="logo"
                      className="w-full object-cover mx-4"
                    ></img>
                  </div>
                  <div
                    title="SQL, pour Structured Query Language, est un langage qui permet d'interroger une base de données relationnelle afin de pouvoir modifier ou récupérer des informations."
                    className="text-[50px] text-[#0076BF]"
                  >
                    <i className="fa-solid fa-database"></i>
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
                    title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                    className="text-[50px] text-[#53C1DE]"
                  >
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <div
                    title=" ChatGPT est une IA générative qui peut comprendre et répondre à des questions en utilisant le langage naturel."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#11773E"
                        d="M30.7,7.27L28.33,9.1c-1.605-2.067-4.068-3.209-6.697-3.092C17.313,6.2,14,9.953,14,14.277l0,9.143	l10.5,6.12l-1,1.72l-11.706-6.827C11.302,24.146,11,23.62,11,23.051l0-8.687C11,8.1,16.129,2.79,22.39,3.007	C25.669,3.12,28.68,4.663,30.7,7.27z"
                      ></path>
                      <path
                        fill="#11773E"
                        d="M12.861,9.833l0.4,2.967c-2.592,0.357-4.813,1.919-6.026,4.254c-1.994,3.837-0.4,8.582,3.345,10.745	l7.918,4.571l10.55-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282-1.101,0.281-1.594-0.003l-7.523-4.343	C3.73,27.308,1.696,20.211,5.014,14.898C6.752,12.114,9.594,10.279,12.861,9.833z"
                      ></path>
                      <path
                        fill="#11773E"
                        d="M6.161,26.563l2.77,1.137c-0.987,2.423-0.745,5.128,0.671,7.346	c2.326,3.645,7.233,4.638,10.977,2.476l7.918-4.572l0.05-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569-0.307,1.094-0.8,1.379	l-7.523,4.343c-5.425,3.132-12.588,1.345-15.531-4.185C5.083,32.994,4.914,29.616,6.161,26.563z"
                      ></path>
                      <path
                        fill="#11773E"
                        d="M17.3,40.73l2.37-1.83c1.605,2.067,4.068,3.209,6.697,3.092C30.687,41.8,34,38.047,34,33.723l0-9.143	l-10.5-6.12l1-1.72l11.706,6.827C36.698,23.854,37,24.38,37,24.949l0,8.687c0,6.264-5.13,11.574-11.39,11.358	C22.331,44.88,19.32,43.337,17.3,40.73z"
                      ></path>
                      <path
                        fill="#11773E"
                        d="M35.139,38.167l-0.4-2.967c2.592-0.357,4.813-1.919,6.026-4.254c1.994-3.837,0.4-8.582-3.345-10.745	l-7.918-4.571l-10.55,6.033l-0.99-1.726l11.765-6.724c0.494-0.282,1.101-0.281,1.594,0.003l7.523,4.343	c5.425,3.132,7.459,10.229,4.141,15.543C41.248,35.886,38.406,37.721,35.139,38.167z"
                      ></path>
                      <path
                        fill="#11773E"
                        d="M41.839,21.437l-2.77-1.137c0.987-2.423,0.745-5.128-0.671-7.346	c-2.326-3.645-7.233-4.638-10.977-2.476l-7.918,4.572l-0.05,12.153l-1.99-0.006l0.059-13.551c0.002-0.569,0.307-1.094,0.8-1.379	l7.523-4.343c5.425-3.132,12.588-1.345,15.531,4.185C42.917,15.006,43.086,18.384,41.839,21.437z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    title="est une multinationale américaine fondée en 2004 par Mark Zuckerberg."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={meta}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
                  </div>

                  <div
                    title="Google Analytics est un service gratuit d'analyse d'audience d'un site Web ou d'applications "
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <svg
                      viewBox="0 0 1024 1176.463"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ed750a"
                    >
                      <path d={analytics} />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={Alibiav2}
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

export default BackEnd;
