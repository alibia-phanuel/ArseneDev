import Footer from "../Footer";
import Resaux from "../Resaux";
import ReactPlayer from "react-player/lazy";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function Videos() {
  const { t } = useTranslation();
  const { back, see, titleOne, descriptiontOne, similaire } =
    t("aboutMarketing");
  return (
    <div className=" bg-[#313552]">
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="/#Réalisations">{back}</a>
            </button>
          </div>
          <div>
            <h1 className="text-[40px] capitalize font-bold">{titleOne}</h1>
            <p className="text-[#FFD43B]">Communication</p>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a
                href="https://www.youtube.com/watch?v=PfrXEaJMllM"
                target="__blanck"
              >
                {see}
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=PfrXEaJMllM"
              width="100%"
              height="100%"
            />
          </div>
          <div className="  px-4  py-10  w-full text-xl flex justify-center items-center">
            {descriptiontOne}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="container ">
          <h2 className="text-[40px] capitalize font-bold my-[40px]  text-white text-center">
            {similaire}
          </h2>
          <div className="flex gap-4 flex-wrap  justify-center items-center mb-[40px]">
            <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=iMLfh3Sbo1g"
                width="100%"
                height="100%"
              />
            </div>

            <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=bBvvxJTdSbI"
                width="100%"
                height="100%"
              />
            </div>

            <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=oyyQe0vbVnI"
                width="100%"
                height="100%"
              />
            </div>

            <div className="rounded-lg h-[500px] w-[700px] max-md:w-[400px] max-md:h-[300px]  max-sm:w-[270px] max-sm:h-[270px]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=0KNCzGIUdMU"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default Videos;
