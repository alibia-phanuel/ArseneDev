import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  const { Moretitle3, Moretitle4, Moretitle5, Moretitle6 } = t("Footer");

  const inputStyles = `my-5 w-full outline-none rounded-lg bg-primary-300
  px-5 py-3 `;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div id="contact" className="bg-[#313552] flex justify-center items-center">
      <div className="mx-4 container  py-[50px] flex flex-col justify-center items-center">
        <div className="my-[100px] flex justify-center items-center flex-col">
          <h1 className="font-[roboto] text-[#FFD43B] text-[30px] capitalize">
            {Moretitle3}
          </h1>
          <p className="font-[roboto] text-[20px] text-white text-center mt-10">
            {Moretitle4} 🙂
          </p>
        </div>
        <motion.div
          className="mt-10 basis-3/5 md:mt-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/phanuel.alibia@gmail.com"
            method="POST"
            className=" w-[900px] max-[782px]:w-[600px] max-md:w-[400px] max-[418px]:w-[300px] max-[280px]:w-[200px]"
          >
            <input
              className={inputStyles}
              type="text"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
              placeholder={Moretitle6}
            />
            {errors.name && (
              <p className=" text-[#f53f3f] mt-0 text-primary-500">
                {errors.name.type === "required" && "Nom et prénom obligatoire"}
                {errors.name.type === "maxLength" &&
                  "La longueur maximale est de 100 caractères."}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="relative text-[#f53f3f] mt-0 text-primary-500">
                {errors.email.type === "required" && "Adresse mail obligatoire"}
                {errors.email.type === "pattern" &&
                  "Entré une adresse email valide svp."}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="MESSAGE..."
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="relative text-[#f53f3f] mt-0 text-primary-500">
                {errors.message.type === "required" &&
                  "Le message est obligatoire merci."}
                {errors.message.type === "maxLength" &&
                  "La longueur maximale est de 2000 caractères."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 font-bold bg-[#FFD43B]  rounded-lg bg-secondary-500 px-20 py-3 transition  duration-500 text-[#313552]"
            >
              {Moretitle5}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
