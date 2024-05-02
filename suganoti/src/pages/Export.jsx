import "./export.css";
import { useTranslation } from "react-i18next";

function Export() {

  const { t } = useTranslation();

  return (
    <div className="container">
        <h1>{t("EXPORT_H1")}</h1>
    <div className="export-img-container">
    <img src="./images/infografia.png" alt="Infografia" className="export-img" />
    </div>
   
        <ul>
          <li>{t("EXPORT_LI_1")}</li>
          <li>{t("EXPORT_LI_2")}</li>
          <li>{t("EXPORT_LI_3")}</li>
        </ul>
    </div>
  
  )
}

export default Export