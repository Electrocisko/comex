import { useTranslation } from "react-i18next";
import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="container about-container">
      <div className="about-image-container">
        <img src="./images/pexels-frans-van-heerden-201846-1624695.jpg" alt="hombre trabajando en una computadora" />
      </div>
      <div className="about-text-container" >
        <h1 className="mb-2 ">{t("ABOUT_H1")}</h1>
        <p>{t("ABOUT_P1")}</p>
        <p>{t("ABOUT_P2")}</p>
        <p>{t("ABOUT_P3")}</p>
 
      </div>
    </div>
  );
}

export default About;
