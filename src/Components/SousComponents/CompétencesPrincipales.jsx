import tailwind from "../../assets/tailwind.png";
import next from "../../assets/nextjs.png";
import express from "../../assets/express.png";
import Insomnia from "../../assets/Insomnia.png";
import vscode from "../../assets/vscode.png";
import three from "../../assets/three.png";

import typescript from "../../assets/typescript.png";
import { motion } from "framer-motion";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function CompétencesPrincipales() {
  const { t } = useTranslation();
  const { Sectitle1, Sectitle2, Sectitle3 } = t("skills");
  const { title1, title2, title3 } = t("descriptiont");
  return (
    <div>
      <div className="my-20">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" my-10 font-[roboto] text-[#FFD43B] text-[30px] capitalize"
        >
          {Sectitle1}
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="skils font-[roboto] flex  gap-4 flex-wrap"
        >
          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
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

              <div
                title="Bootstrap est une collection d'outils utiles à la création du design de sites et d'applications web."
                className="text-[50px] text-[#FFFFFF]"
              >
                <i className="fa-brands fa-bootstrap"></i>
              </div>

              <div
                title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                className="text-[50px] text-[#53C1DE]"
              >
                <i className="fa-brands fa-react"></i>
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
                title="est une bibliothèque JavaScript pour créer des scènes 3D dans un navigateur web. "
                className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-lg"
              >
                <img
                  src={three}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>

              <div
                title="est un langage qui peut être vu comme une version du JavaScript."
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img
                  src={typescript}
                  alt="logo"
                  className="w-full object-cover rounded-lg"
                ></img>
              </div>
              <div
                title="Next. js est un framework qui permet aux développeurs d'écrire facilement des applications universelles avec React de manière transparente, facile et efficace."
                className="w-[50px] h-[50px] flex justify-center items-center bg-white p-2 rounded-lg"
              >
                <img
                  src={next}
                  alt="logo"
                  className="w-full object-cover "
                ></img>
              </div>
            </div>
            <div className="titre my-4 font-bold text-[24px] ">
              Language & framework <br />
              <span className="text-[#FFD43B]">Front-End</span>
            </div>
            <div className="description">{title1}</div>
          </div>
          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff] p-10 cursor-pointer text-white bg-[#221C27] shadow-lg">
            <div className="icones-language flex items-center gap-4 flex-wrap">
              <div
                title="Node.js est une plateforme de développement Javascript"
                className="text-[50px] text-[#69A15C]"
              >
                <i className="fa-brands fa-node"></i>
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
                title="Express.js est un framework pour construire des applications web basées sur Node.js"
                className=" rounded-lg w-[60px] h-[60px] flex justify-center bg-white items-center"
              >
                <img
                  src={express}
                  alt="logo"
                  className="w-full object-cover mx-4"
                ></img>
              </div>
            </div>
            <div className="titre my-4 font-bold text-[24px] ">
              Language & framework <br />
              <span className="text-[#FFD43B]">Back-End</span>
            </div>
            <div className="description">{title2}</div>
          </div>
          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg">
            <div className="icones-language flex items-center gap-4 flex-wrap">
              <div
                title="Git est un outil qui va vous permettre de 'versionner' votre projet"
                className="text-[50px] text-[#E44D26]"
              >
                <i className="fa-brands fa-git-alt"></i>
              </div>
              <div
                title="GitHub est un site web et un service de cloud"
                className="text-[50px] text-[#1572B6]"
              >
                <i className="fa-brands fa-github"></i>
              </div>
              <div
                title="GitLab est une plateforme DevOps open source qui s'appuie sur le logiciel de gestion de versions Git."
                className="text-[50px] text-[#F7DF1E]"
              >
                <i className="fa-brands fa-gitlab"></i>
              </div>

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
                title="Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS"
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img
                  src={vscode}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
            </div>
            <div className="titre my-4 font-bold text-[24px] ">
              {Sectitle2} {""}
              <span className="text-[#FFD43B]"> {Sectitle3}</span>
            </div>
            <div className="description">{title3}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CompétencesPrincipales;
