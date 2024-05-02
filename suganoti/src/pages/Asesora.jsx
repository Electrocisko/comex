import "./asesora.css";
import { useTranslation } from "react-i18next";

function Asesora() {
  const { t, i18n} = useTranslation();

  return (
    <div className="container asesora-container">
      <div className="asesora-img-container">
        <img
          src="./images/pexels-mikhail-nilov-8297478.jpg"
          alt="escritorio"
          height={"400px"}
        />
      </div>

      <div className="asesora-text-container">
        <h1 className="mb-3">{t("SERVICES_H1")}</h1>
        <ul>
          <li>{t("SERVICES_LI_1")}</li>
          <li>{t("SERVICES_LI_2")}</li>
          <li> {t("SERVICES_LI_3")}</li>
          {i18n.language ==="es" ? <li> {t("SERVICES_LI_4")}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default Asesora;
