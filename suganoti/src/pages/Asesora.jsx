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
          <h1 className="mb-3">Servicios internacionales</h1>
          <ul>
            <li>
            Representación comercial.
            </li>
            <li>
            Desarrollo de clientes y proveedores.
            </li>
            <li>Almacenamiento y gestión de stocks.</li>
            <li>Seguimiento completo del negocio.</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Asesora;
