import { useTranslation } from "react-i18next";

function AsesoraButton() {

    const {t} = useTranslation();

  return (
    <button className="btn btn-primary w-50">{t("BUTTON_ADVICE")}</button>
  )
}

export default AsesoraButton