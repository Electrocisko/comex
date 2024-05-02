import "./import.css";
import { useTranslation } from "react-i18next";

function Import() {

  const { t } = useTranslation();

    return (
      <div className="import-container ">
       <div>
     
       <div className="container">
       <h1>{t("IMPORT_H1")}</h1>
       <div className="import-img-container">
       <img src="./images/pexels-dibert-1117210.jpg" alt="Barco con containers" className="ship-image" />
       </div>
        <ul>
         <li>{t("IMPORT_LI_1")}</li> 
         <li>{t("IMPORT_LI_2")}</li>
         <li>{t("IMPORT_LI_3")}</li>
        </ul>
       </div>
       </div>
   
      </div>
   
   
     )
  }




export default Import


