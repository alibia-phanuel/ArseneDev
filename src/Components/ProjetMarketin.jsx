import { motion } from "framer-motion";
//importation image
import marketing from "../assets/marketing/projet-marketing.png";
import ps from "../assets/ps.png";
import pr from "../assets/pr.png";
import audition from "../assets/audition.png";
import insta from "../assets/instagramme.png";
import facebook from "../assets/facebook.png";
import banner from "../assets/marketing/adss.png";
import meta from "../assets/meta.png";
// import meta from "../assets/meta.png";
//Tranduction dependances
import { useNavigate } from "react-router-dom";
//Tranduction dependances
import { useTranslation } from "react-i18next";
import videos from "../assets/marketing/videos.png";
// Fin importation image
import { useRef, useEffect, useState } from "react";
function ProjetMarketin() {
  const { t } = useTranslation();

  const { foor, Sectitle6, tree, tree2 } = t("Projects");
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const navigae = useNavigate();
  function video() {
    navigae("/Video");
  }

  function page() {
    navigae("/Page");
  }
  function pub() {
    navigae("/Pub");
  }
  return (
    <div className="bg-no-repeat  bg-fixed  bg-center bg-cover  w-[100%] bg-[#313552] font-[roboto] py-[100px]">
      <div className="w-full h-full  flex justify-center items-center px-4">
        <div className=" w-full container  flex  justify-center flex-col relative">
          <h1
            className="roboto text-[#FFD43B] text-[20px] mb-9 font-bold  capitalize"
            id="Réalisations "
          >
            {foor}
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
                <div className="w-full overflow-hidden ">
                  <img
                    src={videos}
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
                    title="Photoshop est un logiciel de retouche, de traitement et de dessin assisté par ordinateur."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={ps}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>

                  <div
                    title="Adobe Premiere Pro est le logiciel de montage vidéo de la suite Adobe."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={pr}
                      alt="logo"
                      className="w-full object-cover"
                    ></img>
                  </div>
                  <div
                    title="Adobe Audition est un logiciel de traitement de données audio numériques."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={audition}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
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
                </div>

                <button
                  onClick={video}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>

              <div className="w-[450px] flex flex-col justify-between group min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full  rounded overflow-hidden">
                  <img
                    src={marketing}
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
                    title="Facebook est un réseau social qui vous permet de vous connecter et de partager facilement avec votre famille et vos amis en ligne."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={facebook}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
                  </div>
                  <div
                    title="Instagram est un média social permettant de partager des photos et des vidéos."
                    className="w-[50px] h-[50px] flex justify-center items-center"
                  >
                    <img
                      src={insta}
                      alt="logo"
                      className="w-full object-cover rounded-lg"
                    ></img>
                  </div>
                </div>

                <button
                  onClick={page}
                  className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552]"
                >
                  {Sectitle6}
                </button>
              </div>
              <div className="group w-[450px] flex flex-col justify-between min-w-[30rem] border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
                <div className="w-full overflow-hidden ">
                  <img
                    src={banner}
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
                </div>

                <button
                  onClick={pub}
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

export default ProjetMarketin;
