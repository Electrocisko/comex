import "./export.css";
import { useTranslation } from "react-i18next";

function Export() {

  const { i18n } = useTranslation();

  if (i18n.language =="en") {
    return (
      <div className="container">
   <h1 className="mt-5 text-center">This page is only available in Spanish</h1>
      </div>
    )
  
  } else {
  return (
    <div className="container">
        <h1>Exportación</h1>
    <div className="export-img-container">
    <img src="./images/pexels-chanaka-318741-906494.jpg" alt="Contenedores" className="export-img" />
    </div>
   

        <ul>
          <li>Recepción y análisis de órdenes de compra.</li>
          <li>Emisión de Pro-formas y cotizaciones.</li>
          <li>Emisión de facturas comerciales.</li>
          <li>Clasificación Arancelaria.</li>
          <li>Asesoramiento ante bancos y compañías de seguros.</li>
          <li>Asesoramiento y contrato de fletes y seguros internacionales.</li>
          <li>Reserva de Bodega: vía aérea, marítima y terrestre.</li>
          <li>Confección y tramitación del Certificado de Origen Mercosur, ante las distintas Cámaras.</li>
          <li>Confección y tramitación del Certificado de Origen para la CEE / Form. “A”.</li>
          <li>Confección y tramitación del Conocimiento de Embarque, ante la Agencia Marítima.</li>
          <li>Certificados fitosanitarios o cualquier documento inherente a la operación.</li>
          <li>Tramitaciones de seguros de transporte y/o de caución, y obtención de pólizas.</li>
          <li>Tramitaciones Consulares y Pago de Tasas.</li>
          <li>Confección de Permisos de Embarque y tramitación.</li>
          <li>Seguimiento post-embarque, llegada de la mercadería a destino.</li>
          <li>Pago de derechos / gravámenes, impuestos y servicios.</li>
          <li>Gestión de entrega de documentación original al importador en destino.</li>
          <li>Coordinación del Transporte de carga internacional y seguimiento.</li>
          <li>Intervenciones previas ante distintos Organismos Oficiales.</li>
          <li>Control, Activación y seguimiento de reintegros ante la Dirección General de Aduanas.</li>
        </ul>
    </div>
  
  )
}
}
export default Export