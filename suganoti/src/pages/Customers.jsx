import "./customer.css";
import { useTranslation } from "react-i18next";

function Customers() {

  const { i18n } = useTranslation();

  if (i18n.language =="es") {
    return (
      <div className="container">
   <h1 className="mt-5 text-center">Ruta disponible en Ingles</h1>
      </div>
    )
  
  } else {
  return (
   <div className="container">
      <h1>Customers</h1>
      <p>
        <h3 className="customer_h3">Customer-centric strategies:</h3> Focusing on understanding
        customer&lsquo;s needs and cultivating strong relationships to drive
        innovation and business growth.
      </p>
      <p>
        <h3 className="customer_h3">Market Analysis:</h3> Conducting detailed research and analysis of
        potential markets, encompassing consumer behaviour, competition, and
        market entry barriers.
      </p>
      <p>
        <h3 className="customer_h3">Regulatory Guidance:</h3> Navigating the intricate web of
        international trade laws and regulations to ensure compliance.
      </p>
      <p>
        <h3 className="customer_h3">Logistics Support:</h3> Expertly managing the logistics of shipping
        and distribution to ensure efficient and cost-effective product
        delivery.
      </p>
      <p>Supply chain management</p>
      </div>
  );
}
}
export default Customers;
