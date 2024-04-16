import './App.css';
import {useTranslation} from "react-i18next";
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from  "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";


function App() {

  const { t, i18n } = useTranslation();

  return (
    <>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   


    </Routes>

    <h1 className='h1'>{t("TITLE")}</h1>
    <h2>Idioma: {i18n.language === "es" ? "Español" : "English"}</h2>
    </>
  )
}

export default App
