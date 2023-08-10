/* eslint-disable react/prop-types */
const Header = ({
  theme,
  texts,
  auth,
  handleTheme,
  handleLanguage,
  handleAuth,
}) => {
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
        name="theme"
        id="light"
        value="light"
        onClick={handleTheme}
        defaultChecked={theme === "light" ? true : null}
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
        defaultChecked={theme === "dark" ? true : null}
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <br />
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default Header;
