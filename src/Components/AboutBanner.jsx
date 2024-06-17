import map from "../assets/map.jpg";

function AboutBanner() {
  return (
    <div className="flex justify-center flex-col bg-[#111111]  ">
      <div
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundAttachment: "fixed",
        }}
        className="h-[50vh] w-full flex justify-center"
      >
        <div className="h-full w-full bg-[#1b1d297d]"></div>
      </div>
    </div>
  );
}

export default AboutBanner;
