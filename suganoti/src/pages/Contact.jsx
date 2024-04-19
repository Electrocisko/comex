import { useTranslation } from "react-i18next";
import "./contact.css";

function Contact() {

  const {t} = useTranslation();

  return (
    <>
      <h1 className="contact-h1">{t("CONTACT_H1")}</h1>
      <div className="contact-container">
        <div className="contact-form-container">
          <form>
            <input
              type="text"
              placeholder={t("CONTACT_FORM_NAME")}
              className="form-control mb-2"
            />
            <input
              type="text"
              placeholder={t("CONTACT_FORM_PHONE")}
              className="form-control mb-2"
            />
            <input
              type="email"
              placeholder={t("CONTACT_FORM_EMAIL")}
              className="form-control mb-2"
            />
            <input
              type="text"
              placeholder={t("CONTACT_FORM_COMPANY")}
              className="form-control mb-2"
            />
            <input
              type="text"
              placeholder={t("CONTACT_FORM_COUNTRY")}
              className="form-control mb-2"
            />
            <textarea
              placeholder={t("CONTACT_FORM_TEXTAREA")}
              name="message"
              id=""
              cols="50"
              rows="5"
              className="form-control mb-2"
            ></textarea>
            <button type="submit" className="btn btn-primary w-100">
              {t("CONTACT_FORM_SUBMIT")}
            </button>
          </form>
        </div>
        <div className="contact-text-container">
          <div>
            <p><img src="./images/mail-icon.svg" alt="Icono de mail" />     info@suganoti.com.ar</p>
            <p> <img src="./images/call-icon.svg" alt="Icono de telefono" /> +54 9 11 6734-3375</p>
            <p> <img src="./images/location-icon.svg" alt="" /> Calle xxxx Buenos Aires Argentina </p>
          </div>
          <div>
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.0598859186375!2d-58.38559172351409!3d-34.60340433830787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1713532054690!5m2!1ses-419!2sar"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
