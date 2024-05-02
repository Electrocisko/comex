import "./export.css";
import { useTranslation } from "react-i18next";

function Export() {

  const { i18n } = useTranslation();

  if (i18n.language =="en") {
    return (
      <div className="container">
   <h1 className="mt-5 text-center">This page is only available in Spanish</h1>
      </div>
    )
  
  } else {
  return (
    <div className="container">
        <h1>Exportación</h1>
    <div className="export-img-container">
    <img src="./images/pexels-chanaka-318741-906494.jpg" alt="Contenedores" className="export-img" />
    </div>
   

        <ul>
          <li>Gestión Aduanera.</li>
          <li>Presentaciones y certificaciones.</li>
          <li>Logística integral .</li>
 
        </ul>
    </div>
  
  )
}
}
export default Export