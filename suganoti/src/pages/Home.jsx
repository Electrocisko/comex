import { useTranslation } from "react-i18next";
import AsesoraButton from "../components/asesoraButton/AsesoraButton";
import "./home.css"
import { Link } from "react-router-dom";

function Home() {
  const { t} = useTranslation();

    return (
      <div className="home-container">
        <div className="home-text-container">
          <h1>{t("HOME_H1")}</h1>
          <h2>{t("HOME_H2")}</h2>
          <p>{t("HOME_P1")}</p>
          <p>{t("HOME_P2")}</p>
          <p>{t("HOME_P3")}</p>
          <p>{t("HOME_P4")}</p>
          <div className="home-btn-advice-container">
            <Link to={"/contact"}>< AsesoraButton/></Link>
          
          </div>
        </div>
        <div className="home-img-container">
          <img className="home-img" src="./images/pexels-frans-van-heerden-201846-1624695.jpg" alt="Barco container" /> 
        </div>
      </div>
    );
  }

export default Home;
