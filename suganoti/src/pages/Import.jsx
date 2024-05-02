import "./import.css";
import { useTranslation } from "react-i18next";

function Import() {

  const { i18n } = useTranslation();

  if (i18n.language =="en") {
    return (
      <div className="container">
   <h1 className="mt-5 text-center">This page is only available in Spanish</h1>
      </div>
    )
  
  } else {
    return (
      <div className="import-container ">
       <div>
     
       <div className="container">
       <h1>Importación</h1>
       <div className="import-img-container">
       <img src="./images/pexels-dibert-1117210.jpg" alt="Barco con containers" className="ship-image" />
       </div>
     
   
        <ul>
         <li>Gestión aduanera integral.</li> 
         <li>Coordinación de transporte internacional.</li>
         <li>Gestión Bancaria.</li>
        </ul>
       </div>
       </div>
   
      </div>
   
   
     )
  }


}

export default Import


