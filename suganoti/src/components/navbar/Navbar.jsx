import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguage = (la) => {
    i18n.changeLanguage(la);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="#" className="navbar-brand">
          <img src="./images/isologox.png" alt="Suganoti" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-50">
            <li className="nav-item ms-2">
              <Link className="nav-link" to={"/"}>
                {t("NAVBAR_1")}
              </Link>
            </li>
            <li className="nav-item dropdown ms-2">
              <Link
                className="nav-link dropdown-toggle"
                to={"/"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("NAVBAR_2")}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  {i18n.language === "es" ? (
                    <Link className="dropdown-item" to={"/importacion"}>
                      {t("DROPDOWN_1")}
                    </Link>
                  ) : (
                    <Link className="dropdown-item" to={"/customers"}>
                      {t("DROPDOWN_1")}
                    </Link>
                  )}
                </li>

                <li>
                  {i18n.language === "es" ? (
                    <Link className="dropdown-item" to={"/exportacion"}>
                      {t("DROPDOWN_2")}
                    </Link>
                  ) : (
                    <Link className="dropdown-item" to={"/suppliers"}>
                      {t("DROPDOWN_2")}
                    </Link>
                  )}
                </li>

                <li>
                  {i18n.language === "es" ? (
                    <Link className="dropdown-item" to={"/asesoramiento"}>
                      {t("DROPDOWN_3")}
                    </Link>
                  ) : null}
                </li>
              </ul>
            </li>
            <li className="nav-item ms-2">
              <Link to={"/"} className="nav-link">
                {t("NAVBAR_3")}
              </Link>
            </li>
          </ul>
          <div className="w-50">
            <button
              className="btn btn-outline-secondary mx-2 float-end "
              onClick={() => handleLanguage("es")}
            >
              ESP
            </button>
            <button
              className="btn btn-outline-secondary mx-2 float-end"
              onClick={() => handleLanguage("en")}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
