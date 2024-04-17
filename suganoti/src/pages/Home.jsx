import {useTranslation} from "react-i18next";


function Home() {

  const { t, } = useTranslation();


  return (
    <div>
      <h1>{t("HOME_H1")}</h1>
      <h2>{t("HOME_H2")}</h2>
      <p>{t("HOME_P1")}</p>
      <p>{t("HOME_P2")}</p>
      <p>{t("HOME_P3")}</p>
      <p>{t("HOME_P4")}</p>
    </div>
  );
}

export default Home;
