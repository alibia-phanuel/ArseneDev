import Resaux from "../Resaux";
import Footer from "../Footer";
import taiwind from "../../assets/tailwind.png";
import ReactPlayer from "react-player/lazy";
import express from "../../assets/express.png";
import vscode from "../../assets/vscode.png";
import meta from "../../assets/meta.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
function AlibiaV2() {
  const { t } = useTranslation();
  const {
    voir,
    intro,
    frontTitlte,
    frontDes,
    frontTech,
    backtitlteOne,
    backtitlteTwo,
    backtitlteDesc,
    Marketing,
    Conclusion,
  } = t("alibia");
  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  return (
    <div>
      <div className="bg-[#313552]   justify-center items-center flex  w-full fixed shadow-xl">
        <div className="container flex relative items-center font-[roboto] py-4 px-6 border-b-2 border-[#FFD43B]">
          <nav className="text-[#ffffff] relative capitalize flex justify-between items-center max-[446px]:gap-2 flex-wrap w-full max-md:justify-center">
            <div className=" italic  font-bold text-[30px] text-[#FFD43B]">
              <a href="/">AT</a>
            </div>
            <div className="flex justify-center items-center gap-8 py-1 flex-wrap max-md:gap-4">
              <a
                href="#intro"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B] "
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
                href="#MarkCom"
                className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]"
              >
                Marketing & communication
              </a>
              <a
                href="#conclu"
                className=" border-b-2 transition-all border-[#FFD43B]"
              >
                conclusion
              </a>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <div className="w-[12px] bg-green-500 h-[12px] rounded-full"></div>
              <a href="https://alibia.net/" target="_blanc">
                {voir}
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div
        id="intro"
        className="h-screen bg-[#221C27] flex justify-center items-center flex-col gap-5 px-4"
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-white text-center text-lg w-[500px] max-md:w-full "
        >
          {intro}
        </motion.p>
        <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=UxglTSRUyTQ"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div id="front" className="h-screen bg-[#313552] flex justify-center">
        <div className="container flex flex-col  items-center justify-center">
          <h1 className=" text-center font-bold text-2xl text-white my-[50px] border-b-2 transition-all border-[#FFD43B]">
            Front-End
          </h1>
          <div className="w-full flex justify-evenly flex-wrap px-4 gap-4">
            <div className="text-justify text-white flex-wrap">
              <h2 className="text-lg capitalize text-white font-bold my-[25px]">
                {frontTitlte}
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-[500px] max-md:w-full"
              >
                {frontDes}
              </motion.div>
            </div>
            <div>
              <h2 className="text-lg capitalize text-[#FFD43B] font-bold my-[25px]">
                {frontTech}
              </h2>
              <motion.div
                className="icones-language flex items-center gap-4 flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  title="L'HTML constitue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage."
                  className="text-[50px] text-[#E44D26] cursor-pointer"
                >
                  <i className="fa-brands fa-html5"></i>
                </div>

                <div
                  title="Tailwind CSS est un framework CSS open source."
                  className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={taiwind}
                    alt="logo"
                    className="w-full object-cover"
                  ></img>
                </div>
                <div
                  title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                  className="text-[50px] text-[#53C1DE] cursor-pointer"
                >
                  <i className="fa-brands fa-react"></i>
                </div>
                <div
                  title=" ChatGPT est une IA générative qui peut comprendre et répondre à des questions en utilisant le langage naturel."
                  className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
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

                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 -58 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
                        fill="#000000"
                      ></path>
                      <path
                        d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
                        fill="#D0021B"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="w-[100px] h-[30px] flex justify-center items-center bg-white rounded-lg px-2 cursor-pointer">
                  <svg
                    fill="none"
                    height="372"
                    width="2500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0.28100000000000047 187.975 27.399"
                  >
                    <g fill="#5a29e4">
                      <path d="M93.295 3.652l-6.939 5.653h4.532V27.68l2.407-1.939zM95.295 24.1l7.061-5.795h-4.659V.35l-2.402 1.673zM182.695 6.953c.8.416 1.376.768 1.728 1.056l2.496-4.752c-1.248-.768-2.752-1.456-4.512-2.064-1.728-.608-3.6-.912-5.616-.912-1.92 0-3.696.32-5.328.96-1.6.64-2.88 1.584-3.84 2.832-.928 1.248-1.392 2.8-1.392 4.656 0 2.08.656 3.68 1.968 4.8 1.344 1.088 3.392 1.984 6.144 2.688 2.208.576 3.984 1.104 5.328 1.584 1.376.448 2.064 1.2 2.064 2.256 0 1.568-1.472 2.352-4.416 2.352-1.472 0-2.864-.176-4.176-.528s-2.464-.784-3.456-1.296c-.96-.512-1.648-.976-2.064-1.392l-2.592 5.04c1.664 1.056 3.568 1.888 5.712 2.496s4.304.912 6.48.912c1.888 0 3.648-.256 5.28-.768 1.632-.544 2.944-1.408 3.936-2.592 1.024-1.216 1.536-2.816 1.536-4.8 0-1.632-.384-2.944-1.152-3.936-.736-1.024-1.808-1.84-3.216-2.448-1.376-.608-3.008-1.152-4.896-1.632-2.144-.512-3.776-.976-4.896-1.392-1.088-.416-1.632-1.12-1.632-2.112 0-1.696 1.504-2.544 4.512-2.544 1.12 0 2.208.16 3.264.48 1.056.288 1.968.64 2.736 1.056z" />
                      <path
                        clipRule="evenodd"
                        d="M132.182 27.497c-2.112 0-4.032-.368-5.76-1.104-1.728-.768-3.217-1.792-4.465-3.072a14.22 14.22 0 0 1-2.88-4.416 13.138 13.138 0 0 1-1.008-5.04c0-1.76.352-3.456 1.056-5.088a13.385 13.385 0 0 1 2.977-4.32 14.148 14.148 0 0 1 4.511-3.024c1.728-.736 3.616-1.104 5.664-1.104 2.112 0 4.033.4 5.761 1.2 1.728.768 3.2 1.808 4.416 3.12a13.649 13.649 0 0 1 2.879 4.368 13.003 13.003 0 0 1 1.009 4.992c0 1.76-.352 3.456-1.056 5.088a14.11 14.11 0 0 1-2.977 4.32c-1.248 1.248-2.735 2.24-4.463 2.976s-3.616 1.104-5.664 1.104zm-8.257-13.584c0 1.44.337 2.816 1.009 4.128a8.284 8.284 0 0 0 2.831 3.12c1.248.8 2.736 1.2 4.464 1.2 1.76 0 3.248-.416 4.464-1.248 1.217-.864 2.144-1.936 2.784-3.216.64-1.312.961-2.656.961-4.032 0-1.44-.336-2.8-1.008-4.08a7.812 7.812 0 0 0-2.881-3.072c-1.216-.8-2.671-1.2-4.367-1.2-1.76 0-3.265.416-4.513 1.248a8.276 8.276 0 0 0-2.784 3.168 8.804 8.804 0 0 0-.96 3.984zM0 27.305L11.712.473h4.752l11.664 26.832h-6.144l-2.688-6.288H8.88l-2.688 6.288zM14.112 7.529l-3.936 8.448h7.728z"
                        fillRule="evenodd"
                      />
                      <path d="M50.821.473l7.392 9.504L65.605.473h6.288L61.285 14.057l10.272 13.248H65.27l-7.056-9.12-7.008 9.12h-6.384l10.32-13.248L44.485.473z" />
                    </g>
                  </svg>
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    id="framer"
                  >
                    <path
                      fill="#fff"
                      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
                    ></path>
                    <path fill="#05F" d="M14.4 32H24v9.6L14.4 32Z"></path>
                    <path
                      fill="#0AF"
                      d="M14.4 22.4H24V32h-9.6v-9.6zm9.6 0 9.6 9.6H24v-9.6z"
                    ></path>
                    <path
                      fill="#8DF"
                      d="M24 12.8h9.6v9.6H24v-9.6zm-9.6 0H24v9.6l-9.6-9.6z"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div id="back" className="h-screen bg-[#221C27] flex justify-center">
        <div className="container flex flex-col  items-center justify-center">
          <h1 className=" text-center font-bold text-2xl text-white my-[50px] border-b-2 transition-all border-[#FFD43B]">
            back-end
          </h1>
          <div className="w-full flex justify-evenly flex-wrap px-4 gap-4">
            <div className="text-justify text-white flex-wrap">
              <h2 className="text-lg capitalize text-white font-bold my-[25px]">
                {backtitlteOne}
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {backtitlteDesc}
              </motion.div>
            </div>
            <div>
              <h2 className="text-lg capitalize text-[#FFD43B] font-bold my-[25px]">
                {backtitlteTwo}
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="icones-language flex items-center gap-4 flex-wrap"
              >
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
                  title=" ChatGPT est une IA générative qui peut comprendre et répondre à des questions en utilisant le langage naturel."
                  className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="MarkCom"
        className="h-screen  bg-[#313552] text-white flex justify-center items-center flex-col"
      >
        <h1 className="text-center font-bold text-2xl text-white my-[50px] border-b-2 transition-all border-[#FFD43B]">
          Marketing & Communication
        </h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-10  w-[500px] max-md:w-full"
        >
          {Marketing}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="icones-language flex items-center gap-10 flex-wrap"
        >
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

          <div
            title="Google Analytics est un service gratuit d'analyse d'audience d'un site Web ou d'applications "
            className="w-[100px] h-[50px] flex justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path
                d="M62.603 16.596a8.06 8.06 0 0 0-5.669-5.669C51.964 9.57 31.96 9.57 31.96 9.57s-20.005.04-24.976 1.397a8.06 8.06 0 0 0-5.669 5.669C0 21.607 0 32 0 32s0 10.393 1.356 15.404a8.06 8.06 0 0 0 5.669 5.669C11.995 54.43 32 54.43 32 54.43s20.005 0 24.976-1.356a8.06 8.06 0 0 0 5.669-5.669C64 42.434 64 32 64 32s-.04-10.393-1.397-15.404z"
                fill="red"
              />
              <path d="M25.592 41.612L42.187 32l-16.596-9.612z" fill="#fff" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div
        id="conclu"
        className="h-screen bg-[#221C27] text-white flex justify-center items-center flex-col gap-y-6"
      >
        <h1 className="text-center font-bold text-2xl text-white my-[50px] border-b-2 transition-all border-[#FFD43B]">
          Conclusion
        </h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center w-[500px] max-md:w-full"
        >
          {Conclusion}
        </motion.p>
        <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IZK0pM16_PY"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default AlibiaV2;
