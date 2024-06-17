import "./modal.css";
//Tranduction dependances
import { useTranslation } from "react-i18next";
function Modal({ setOpenModal }) {
  const { t } = useTranslation();
  const { Moretitle1, Moreitle2, Moretitle3, Moretitle4, Moretitle5 } =
    t("modal");

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {Moretitle1}
          🙂
        </div>
        <div className="body">
          <ul>
            <li>
              <a href="fils/Lettre-de-motivation.pdf" download="motivation.pdf">
                {Moretitle3}
              </a>
            </li>
            <li>
              <a
                href="public/fils/Cv-Canadiens.docx"
                download="Cv-Canadiens.docx"
              >
                {Moretitle4}
              </a>
            </li>
            <li>
              <a href="public/fils/Cv-Français.pdf" download="Cv-Français.pdf">
                {Moretitle5}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            {Moreitle2}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
