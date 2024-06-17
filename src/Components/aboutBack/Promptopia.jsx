import dbPage from "../../assets/imgBack-end/db.png";
import a from "../../assets/Proptopia/1a.png";
import b from "../../assets/Proptopia/1b.png";
import c from "../../assets/Proptopia/2a.png";
import d from "../../assets/Proptopia/2b.png";
import e from "../../assets/Proptopia/3a.png";
import f from "../../assets/Proptopia/3b.png";
import g from "../../assets/Proptopia/4a.png";
import h from "../../assets/Proptopia/5a.png";
import Resaux from "../Resaux";
import Footer from "../Footer";

import { useTranslation } from "react-i18next";

const Promptopia = () => {
  const { t } = useTranslation();
  const { crudDescription, crudAction, RetourRotato, prop } = t("Projects");
  return (
    <div>
      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between  px-4 flex-wrap gap-y-10  ">
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a href="/#Réalisations">{RetourRotato}</a>
            </button>
          </div>
          <div>
            <h1 className="text-[40px] capitalize font-bold">Promptopia App</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a
                href="https://github.com/alibia-phanuel/promptopia"
                target="__blanck"
              >
                {crudAction}
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white ">
        <div className="container flex items-center  justify-between flex-col px-4 gap-8  ">
          <div className="rounded-lg">
            <img
              src={a}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>

          <div className="rounded-lg">
            <img
              src={b}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>

          <div className="rounded-lg">
            <img
              src={c}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>
          <div className="rounded-lg">
            <img
              src={d}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={e}
              alt="addArticle"
            />
          </div>
          <div className="rounded-lg">
            <img src={f} alt="modifiArticle" className="rounded-lg" />
          </div>
          <div className="rounded-lg">
            <img className="rounded-lg border border-[#FFD43B]" src={g} />
          </div>

          <div className="rounded-lg ">
            <img className="rounded-lg border border-[#FFD43B]" src={h} />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="  px-4  py-10  w-full text-xl">{prop}</div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
};

export default Promptopia;
