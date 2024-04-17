import './App.css';

import Navbar from './components/navbar/Navbar';
import {Routes, Route} from  "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Import from './pages/Import';
import Export from './pages/Export';
import Asesora from './pages/Asesora';
import Customers from './pages/Customers';
import Supliers from './pages/Supliers';
import About from './pages/About';




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
    <Route path='/asesoramiento' element={<Asesora/>}/>
    <Route path='/customers' element={<Customers/>}/>
    <Route path='/suppliers' element={<Supliers/>}/>
    </Routes>
    </>
  )
}

export default App
