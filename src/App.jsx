import Home from "./Home";
import Plante from "./Components/aboutFront/Plante";
import Digital from "./Components/aboutFront/Digital";
import Coofe from "./Components/aboutFront/Coofe";
import ThreeJs from "./Components/aboutFront/ThreeJs";
import Felipe from "./Components/aboutFront/Felipe";
import Mark from "./Components/aboutFront/Mark";
import Pub from "./Components/aboutMarketing/Pub";
import Videos from "./Components/aboutMarketing/Videos";
import Page from "./Components/aboutMarketing/Page";
import Rotato from "./Components/aboutFront/Rotato";
import IsDevExpert from "./Components/aboutFront/IsDevExpert";
import Crud from "./Components/aboutBack/Crud";
import AlibiaVone from "./Components/aboutBack/AlibiaVone";
import AlibiaV2 from "./Components/aboutBack/AlibiaV2";
import Promptopia from "./Components/aboutBack/Promptopia";
import Designer from "./Components/aboutFront/Designer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/**Projet FrontEend */}
        <Route path="/rotato" exact element={<Rotato />} />
        <Route path="/designer" exact element={<Designer />} />
        <Route path="/isdevexpert" exact element={<IsDevExpert />} />
        <Route path="/Plante" exact element={<Plante />} />
        <Route path="/Digital" exact element={<Digital />} />
        <Route path="/Coofe" exact element={<Coofe />} />
        <Route path="/ThreeJs" exact element={<ThreeJs />} />
        <Route path="/Felipe" exact element={<Felipe />} />
        <Route path="/Mark" exact element={<Mark />} />
        {/**Fin Projet FrontEend */}

        {/**Projet Marketing */}
        <Route path="/Video" exact element={<Videos />} />
        <Route path="/Page" exact element={<Page />} />
        <Route path="/Pub" exact element={<Pub />} />
        {/**Projet Marketing */}
        {/**Projet FullStack  */}
        <Route path="/Crud" exact element={<Crud />} />
        <Route path="/Alibiav1" exact element={<AlibiaVone />} />
        <Route path="/Alibiav2" exact element={<AlibiaV2 />} />
        <Route path="/promptopia" exact element={<Promptopia />} />
        {/**Projet FullStack  */}
      </Routes>
    </>
  );
}

export default App;
