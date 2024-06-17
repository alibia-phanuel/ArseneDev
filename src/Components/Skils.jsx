import AutreCompétences from "./SousComponents/AutreCompétences";
import CompétencesPrincipales from "./SousComponents/CompétencesPrincipales";
function Skils() {
  return (
    <div className=" flex justify-center bg-[#313552]" id="skils">
      <div className="container px-4">
        <CompétencesPrincipales />
        <AutreCompétences />
      </div>
    </div>
  );
}

export default Skils;
