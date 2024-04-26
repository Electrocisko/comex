import { useTranslation } from "react-i18next";

function Supliers() {
  const { i18n } = useTranslation();

  if (i18n.language == "es") {
    return (
      <div className="container">
        <h1 className="mt-5 text-center">Ruta disponible en Ingles</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1 className="my-3">Supliers</h1>
        <p>
          We offer an extensive array of services to assist you in finding your
          next supplier from Argentina.
        </p>
        <p>
          We assess suppliers&apos; performance and capabilities in areas such
          as delivery time, price, and logistics efficiency.
        </p>
        <p>
          Our professionals specialize in negotiating contract terms and
          conditions to finalize agreements with selected suppliers.
        </p>
      </div>
    );
  }
}
export default Supliers;
