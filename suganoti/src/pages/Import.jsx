import "./import.css";
import { useTranslation } from "react-i18next";

function Import() {

  const { i18n } = useTranslation();

  if (i18n.language =="en") {
    return (
      <div className="container">
   <h1 className="mt-5 text-center">This page is only available in Spanish</h1>
      </div>
    )
  
  } else {
    return (
      <div className="import-container ">
       <div>
     
       <div className="container">
       <h1>Importación</h1>
       <div className="import-img-container">
       <img src="./images/pexels-dibert-1117210.jpg" alt="Barco con containers" className="ship-image" />
       </div>
     
   
        <ul>
         <li>Presentación de SIRA (Sistema de Importaciones de la República Argentina)</li> 
         <li>Determinación de costos de Importación.</li>
         <li>Control y recepción de documentación proveniente del exterior.</li>
         <li>Retiro de guías aéreas y conocimientos de embarques de distintas compañías.</li>
         <li>Obtención de autorizaciones y registros en Aduana.</li>
         <li>Gestión y obtención de licencias de importación y otros documentos exigibles.</li>
         <li>Negociación de fletes y seguros marítimos, aéreos y terrestres.</li>
         <li>Coordinación del embarque en el exterior y de la descarga al arribo.</li>
         <li>Seguimiento de embarque con el proveedor externo.</li>
         <li>Gestión aduanera integral.</li>
         <li>Clasificación arancelaria y valoración aduanera de mercaderías.</li>
         <li>Gestión de certificados previos en todos los organismos (Anmat, Senasa, Inal, Sedronar, Renar.)</li>
         <li>Revisión de mercadería con la Agencia Marítima, Compañías de Seguro y/o Liquidadores.</li>
         <li>Oficialización y tramitación de todo tipo de destinaciones (a consumo, temporales, tránsitos,
     traslados, reimportaciones, reembarcos, etc).</li>
         <li>Pago de servicios de almacenaje, manipuleos, renta de contenedores, u otros.</li>
         <li>Retiro de mercaderías desde terminales marítimas y aéreas a depósitos fiscales.</li>
         <li>Traslado de cargas por vía terrestre hasta su destino.</li>
         <li>Gestión de traslado a Zona Franca La Plata.</li>
         <li>Ingreso en zona franca para etiquetado, reembalado y expedición.</li>
         <li>Seguimiento de cargas a granel en tanques fiscales.</li>
         <li>Seguimientos de operaciones temporales, control de saldos, vencimientos, presentación de
     prórrogas, Seguridad Eléctrica, ANMAT, INAL, SENASA, confección de ITP-CTIT, etc.</li>
         <li>Coordinación de cargas con las Compañías de transporte.</li>
         <li>Coordinación de devolución de los contenedores a las compañías navieras.</li>
         <li>Retiro de Encomiendas Postales.</li>
         <li>Gestión bancaria.</li>
         <li>Estadísticas.</li>
        </ul>
       </div>
       </div>
   
      </div>
   
   
     )
  }


}

export default Import


