import './App.css';

import Navbar from './components/navbar/Navbar';
import {Routes, Route} from  "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Import from './pages/Import';
import Export from './pages/Export';
import Asesora from './pages/Asesora';
import About from './pages/About';
import Footer from './components/footer/Footer';



function App() {



  return (
    <>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/nosotros' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/exportacion' element={<Export/>}/>
    <Route path='/importacion' element={<Import/>}/>
    <Route path='/servicios' element={<Asesora/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
