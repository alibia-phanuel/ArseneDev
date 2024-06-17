import figmat from "../../assets/figmat.png";
import ps from "../../assets/ps.png";
import pr from "../../assets/pr.png";
import audition from "../../assets/audition.png";
import meta from "../../assets/meta.png";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function AutreCompétences() {
  const { t } = useTranslation();
  const { Sectitle4, Sectitle5, Sectitle6 } = t("skills");
  const { title4, title5, title6, title7 } = t("descriptiont");

  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  return (
    <div>
      <div className="my-20">
        <h1 className=" my-10 font-[roboto] text-[#FFD43B] text-[30px] capitalize">
          {Sectitle4}
        </h1>
        <div className="skils font-[roboto] flex  gap-4 flex-wrap">
          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="icones-language flex items-center gap-4 flex-wrap">
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
                title="Photoshop est un logiciel de retouche, de traitement et de dessin assisté par ordinateur."
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img src={ps} alt="logo" className="w-full object-cover"></img>
              </div>

              <div
                title="Adobe Premiere Pro est le logiciel de montage vidéo de la suite Adobe."
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img src={pr} alt="logo" className="w-full object-cover"></img>
              </div>

              <div
                title="Adobe Audition est un logiciel de traitement de données audio numériques."
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img
                  src={audition}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
            </div>
            <div className="titre my-4 font-bold text-[24px] ">
              {Sectitle5} <span className="text-[#FFD43B]"> {Sectitle6}</span>
            </div>
            <div className="description">{title4}</div>
          </div>

          <div className="w-[450px] hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="icones-language flex items-center gap-4 flex-wrap">
              <div
                title="est une multinationale américaine fondée en 2004 par Mark Zuckerberg."
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <img
                  src={meta}
                  alt="logo"
                  className="w-full object-cover"
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
            <div className="titre my-4 font-bold text-[24px] ">
              Communication & <span className="text-[#FFD43B]">marketing</span>
            </div>
            <div className="description">
              <span className="font-bold text-[#ffd43b]">Méta</span> {title5}{" "}
              <br /> <span className="font-bold text-[#ffd43b]">ChatGPT</span>{" "}
              {title6} <br />{" "}
              <span className="font-bold text-[#ffd43b]">
                Google analytique
              </span>{" "}
              {title7}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutreCompétences;
