import bg from "../assets/react-logo.jpg";
import moi from "../assets/phanuel.png";
import { motion } from "framer-motion";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function Banner() {
  const { t } = useTranslation();
  const { link1, link2, link3 } = t("banner");
  return (
    <>
      <div className="h-[100vh] bg-[#1B1D29] w-full flex justify-center relative ">
        <div className="h-full container">
          <img
            src={bg}
            alt="photo banner"
            className="h-full w-full object-cover"
          ></img>
        </div>
        <div className="bg-[#681b1b17] w-full absolute h-full flex justify-center items-center  ">
          <div className="container flex flex-wrap justify-between  items-center max-[1029px]:flex-col-reverse ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className=" max-[1029px]:text-center my-4 transition-all ease-in-out max-[500px]:bg-[#1b1d297d] max-[500px]:w-full py-2"
            >
              <p className="text-[40px] text-[#FFD43B] max-[1029px]:text-[30px]">
                {link1}
              </p>
              <p className="text-[80px]  font-bold text-white max-[1029px]:text-[60px]">
                Arsène Tsopze
              </p>
              <p className="text-[40px] max-[1029px]:text-[30px] text-white">
                {link2} <span className="text-[#FFD43B]">{link3}</span>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative border-4 border-white   overflow-hidden  shadow-lg group transition-all ease-in-out animation  w-[500px] max-md:w-[400px] max-sm:w-[300px] flex justify-center items-center  rounded-full p-4"
            >
              <img
                src={moi}
                alt="photo de moi"
                className="cursor-pointer transition-all ease-in-out group-hover:scale-110 rounded-full  "
              ></img>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
