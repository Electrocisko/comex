import './App.css';
import {useTranslation} from "react-i18next";
import Navbar from './components/navbar/Navbar';


function App() {

  const {t} = useTranslation();

  return (
    <>
   <Navbar/>
    <h1 className='h1'>{t("TITLE")}</h1>
    </>


  )
}

export default App
