import { useTranslation } from "react-i18next";

function AsesoraButton() {

    const {t} = useTranslation();

  return (
    <button className="btn btn-primary my-2">{t("BUTTON_ADVICE")}</button>
  )
}

export default AsesoraButton