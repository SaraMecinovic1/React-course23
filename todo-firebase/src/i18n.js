import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transaltionsEn from "./translation/translationEn.json";
import transaltionsRs from "./translation/translationRs.json";

const LanguageDetector = {
  type: "languageDetector",  //definira tip detektora jezika
  detect: () => {  //kako bi se odredio jezik aplikacije
    const lang = localStorage.getItem("i18nextLng"); //Ako korisnik već ima postavljen jezik, taj će jezik biti spremljen pod ključem "i18nextLng" u  localSt
    if (lang) {
      return lang;
    }
  },
  init: () => {},
  cacheUserLanguage: () => {}, //služi za pohranjivanje jezika korisnika
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "rs", // Jezik koji će se koristiti ako korisnikov jezik nije podržan
    react: { useSuspense: false },  // Postavljanje na true bi omogućilo suspenziju, ali ovdje je postavljeno na false jer Suspense nije podržan u starijim React verzijama.
    supportedLngs: ["rs", "en"],  // Lista podržanih jezika
    ns: ["translations"], // Imena namespace-ova
    defaultNS: "translations",// Ime glavnog namespace-a

    debug: false,  // Postavljanje na true bi omogućilo debugiranje

    cache: {
      enabled: true, // Omogućavanje pohrane podataka
    },

    interpolation: {
      escapeValue: false, // Onemogućavanje automatskog escapiranja
    },
  });

i18n
  .addResources("rs", "translations", transaltionsRs)   // 1.kljucevi jezika, 
  .addResources("en", "translations", transaltionsEn);

export default i18n;