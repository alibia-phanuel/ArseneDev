import { useState } from "react";
import Modal from "./Modal";
//Tranduction dependances

import { useTranslation } from "react-i18next";
import LangueSelector from "./SousComponent/LangueSelector";
function Header() {
  const { t } = useTranslation();
  const { link1, link2, link3, link4, link5 } = t("menu");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className=" bg-[#313552] flex  justify-center  items-center font-[roboto] py-4 px-6 fixed w-full z-50 shadow-xl">
        <nav className="container  text-[#ffffff] relative capitalize flex justify-between items-center max-[446px]:gap-2 flex-wrap">
          <div className=" italic  font-bold text-[30px] text-[#FFD43B]">
            <a href="/">AT</a>
          </div>
          <div className="menu max-md:hidden">
            <ul className=" flex gap-6 max-md:none">
              <li className="py-1 border-b-2 transition-all border-[#FFD43B]">
                <a href="">{link1}</a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#skils">{link2}</a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Réalisations">{link3} </a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#contact">{link4} </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center py-2">
            <div
              onClick={() => {
                setModalOpen(true);
              }}
              className="text-[15px] border p-2 max-[446px]:p-2 rounded-lg hover:text-[#313552] cursor-pointer hover:bg-[#FFD43B] border-[#FFD43B] hover:border-[#2d2d2d] font-bold  transition-all ease-in-out"
            >
              {link5}
            </div>
            {/**langue */}
            <LangueSelector />
          </div>
          <div className="resposive relative">
            <ul className=" md:hidden ">
              <li className="my-2 py-2 border-b-2 transition-all border-[#FFD43B]">
                <a href="">{link1}</a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#skils">{link2}</a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Réalisations">{link3}</a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="">{link4} </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
}

export default Header;
