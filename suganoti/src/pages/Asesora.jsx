import "./asesora.css";
import { useTranslation } from "react-i18next";

function Asesora() {
  const { i18n } = useTranslation();

  if (i18n.language == "en") {
    return (
      <div className="container">
        <h1 className="mt-5 text-center">
          This page is only available in Spanish
        </h1>
      </div>
    );
  } else {
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
          <h1 className="mb-3">Asesoramiento</h1>
          <ul>
            <li>
              Asesoramiento constante de la normativa de Comercio Exterior y sus
              modificaciones.
            </li>
            <li>
              Asesoramiento en todo lo relacionado con la operativa y normativa
              de depósitos fiscales.
            </li>
            <li>Clasificación Arancelaria.</li>
            <li>Cambio en posiciones arancelarias.</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Asesora;
