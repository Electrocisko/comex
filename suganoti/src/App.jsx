import './App.css';
import {useTranslation} from "react-i18next";


function App() {

  const {t} = useTranslation();

  return (
    <>
    <h1 className='h1'>{t("TITLE")}</h1>
    </>


  )
}

export default App
