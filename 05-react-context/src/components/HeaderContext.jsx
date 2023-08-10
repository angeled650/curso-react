import { useContext } from "react";
import ThemeContext from "../context/ThemeContex";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" id="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <br />
      <input
        type="radio"
        name="theme-context"
        id="light-context"
        value="light"
        onClick={handleTheme}
        defaultChecked={theme === "light" ? true : false}
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme-context"
        id="dark-context"
        value="dark"
        onClick={handleTheme}
        defaultChecked={theme === "dark" ? true : false}
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <br />
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
