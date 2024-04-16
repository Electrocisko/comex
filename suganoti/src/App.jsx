import './App.css';
import {useTranslation} from "react-i18next";
import Navbar from './components/navbar/Navbar';


function App() {

  const { t, i18n } = useTranslation();

  return (
    <>
   <Navbar/>
    <h1 className='h1'>{t("TITLE")}</h1>
    <h2>Idioma: {i18n.language === "es" ? "Español" : "English"}</h2>
    </>
  )
}

export default App
