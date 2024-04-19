import { useTranslation } from "react-i18next";
import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="container about-container">
      <div className="about-image-container">
        <img src="./images/pexels-cottonbro-5083397.jpg" alt="hombre trabajando en una computadora" />
      </div>
      <div className="about-text-container" >
        <h1 className="mb-2 ">{t("ABOUT_H1")}</h1>
        <p>{t("ABOUT_P1")}</p>
        <p>{t("ABOUT_P2")}</p>
        <p>{t("ABOUT_P3")}</p>
        <p>{t("ABOUT_P4")}</p>
        <p>{t("ABOUT_P5")}</p>
        <p>{t("ABOUT_P6")}</p>
      </div>
    </div>
  );
}

export default About;
