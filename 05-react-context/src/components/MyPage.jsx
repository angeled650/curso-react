import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ Invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de página",
  },
  en: {
    headerTitle: "My application WITHOUT Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else if (e.target.value === "dark") {
      setTheme("dark");
    }
  };
  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else if (e.target.value === "en") {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  const handleAuth = () => {
    if (auth) setAuth(null);
    else setAuth(true);
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        texts={texts}
        auth={auth}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
