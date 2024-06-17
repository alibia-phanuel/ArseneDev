import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(Languagedetector).use(initReactI18next).use(Backend).init({
  //ceci vas nous donnee essentiellement toutes les erreurs qui se trouve dans notre application en console
  debug: true,
  //langue charger en cas de non disponibiliter dune autre langue
  fallbackLng: "fr",
  returnObjects: true,
});
