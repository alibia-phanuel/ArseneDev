import ListProductPage from "../../assets/imgBack-end/creudone.png";
import codePage from "../../assets/imgBack-end/code.png";
import addArticle from "../../assets/imgBack-end/crudtwoo.png";
import modifiArticle from "../../assets/imgBack-end/crudthree.png";
import dbPage from "../../assets/imgBack-end/db.png";

import Resaux from "../Resaux";
import Footer from "../Footer";

import { useTranslation } from "react-i18next";

function Crud() {
  const { t } = useTranslation();
  const { crudDescription, crudAction, RetourRotato, crudTitle } =
    t("Projects");
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
            <h1 className="text-[40px] capitalize font-bold">{crudTitle}</h1>
          </div>
          <div>
            <button className="border border-[#FFD43B] p-4 rounded capitalize  hover:bg-[#313552] ">
              <a
                href="https://github.com/alibia-phanuel/CrudApp"
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
              src={ListProductPage}
              alt="addArticle"
              className="rounded-lg border border-[#FFD43B]"
            />
          </div>
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={addArticle}
              alt="addArticle"
            />
          </div>
          <div className="rounded-lg">
            <img
              src={modifiArticle}
              alt="modifiArticle"
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg">
            <img
              className="rounded-lg border border-[#FFD43B]"
              src={codePage}
            />
          </div>

          <div className="rounded-lg ">
            <img className="rounded-lg border border-[#FFD43B]" src={dbPage} />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#221C27]   flex justify-center items-center py-10 text-white">
        <div className="container flex items-center  justify-between flex-col px-4  ">
          <div className="  px-4  py-10  w-full text-xl">{crudDescription}</div>
        </div>
      </div>
      <Resaux />
      <Footer />
    </div>
  );
}

export default Crud;
