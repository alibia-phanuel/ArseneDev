//Tranduction dependances
import { useTranslation } from "react-i18next";
import upwork from "../assets/marketing/upwork.png";

function Resaux() {
  const { t } = useTranslation();
  const { Moretitle1, Moreitle2 } = t("Footer");
  return (
    <div className="flex bg-[#221C27]   items-center justify-center  ">
      <div className="container px-4 ">
        <div className="title my-10 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          <span className="font-semibold uppercase  text-[12px] text-[#FFD43B]">
            {Moretitle1}
          </span>
          <h1 className="text-[30px] text-white"> {Moreitle2}</h1>
        </div>
        <div className="flex flex-wrap items-center  max-md:justify-center rounded-lg gap-4 my-10">
          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://web.facebook.com/profile.php?id=100091545211781"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="bg-white rounded-lg ">
                <i className="fa-brands fa-facebook text-[40px] text-[#0866FF]"></i>
              </div>
              <div>facebook</div>
            </a>
          </div>
          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://twitter.com/alibia2023"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="bg-white rounded-lg px-1">
                <i className="fa-brands fa-square-x-twitter text-[40px] text-[#000000]"></i>
              </div>
              <div>twitter</div>
            </a>
          </div>
          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://www.youtube.com/@phanuelalibia"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="bg-white rounded-lg">
                <i className="fa-brands fa-youtube text-[40px] text-[#FF0000]"></i>
              </div>
              <div>youtube</div>
            </a>
          </div>
          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://github.com/alibia-phanuel"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="">
                <i className="fa-brands fa-github text-[40px]"></i>
              </div>
              <div>github</div>
            </a>
          </div>
          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://dev.to/alibiaphanuel"
              className="flex justify-between  items-center  gap-4"
            >
              <div>
                <i className="fa-brands fa-dev text-[40px]"></i>
              </div>
              <div>DEV Community</div>
            </a>
          </div>

          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://www.linkedin.com/notifications/?filter=all"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="bg-white px-1 rounded-lg">
                <i className="fa-brands fa-linkedin text-[40px] text-[#0866FF]"></i>
              </div>
              <div>linkedin</div>
            </a>
          </div>

          <div className="bg-[#242526] hover:bg-[#313552] text-white capitalize font-bold border border-[#FFD43B] w-[300px] p-4 rounded-lg">
            <a
              target="_blanck"
              href="https://www.upwork.com/freelancers/~0119d7d6945c02ed2f"
              className="flex justify-between  items-center  gap-4"
            >
              <div className="relative w-[42px] bg-white  rounded-lg">
                <img src={upwork} alt="upwork" className="w-full" />
              </div>
              <div>upwork</div>
            </a>
          </div>
          {/**hidden  malt*/}

          {/**hidden */}
        </div>
      </div>
    </div>
  );
}

export default Resaux;
