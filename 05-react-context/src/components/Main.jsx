/* eslint-disable react/prop-types */
const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      <p>{auth ? texts.mainHello : texts.mainWelcome}</p>
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;
