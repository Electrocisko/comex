import "./import.css";
import { useTranslation } from "react-i18next";

function Import() {
  const { t } = useTranslation();

  return (
    <div className="import-container ">
      <div>


        <div className="container import-text-container">
          <h1>{t("IMPORT_H1")}</h1>


          <ul className="li_container">
            <li>{t("IMPORT_LI_1")}</li>
            <li>{t("IMPORT_LI_2")}</li>
            <li>{t("IMPORT_LI_3")}</li>
          </ul>
          <div className="import-img-container">
          <img
            src="./images/pexels-dibert-1117210.jpg"
            alt="Barco con containers"
            className="ship-image"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Import;
