import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContex";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
