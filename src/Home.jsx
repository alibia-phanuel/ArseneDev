import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Skils from "./Components/Skils";
import Realisations from "./Components/Réalisations";
import ProjetFront from "./Components/ProjetFront";
import ProjetMarketin from "./Components/ProjetMarketin";
import BackEnd from "./Components/BackEnd";
import More from "./Components/More";
import Udate from "./Components/Udate";
import Example from "./Components/Veille";
import Me from "./Components/Me";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function Home() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Skils />
      <Realisations />
      <ProjetFront />
      <ProjetMarketin />
      <BackEnd />
      <Udate />
      <More />
      <Example />
      <Me />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
