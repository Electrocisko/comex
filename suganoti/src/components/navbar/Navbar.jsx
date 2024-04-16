import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguage = (la) => {
    i18n.changeLanguage(la);
  };

  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="./images/isologox.png"
            alt="Suganoti"
            height="30"
          />
        </a>
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
              <a href="#" className="nav-link">
                {t("NAVBAR_1")}
              </a>
            </li>
            <li className="nav-item dropdown ms-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("NAVBAR_2")}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                  {t("DROPDOWN_1")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  {t("DROPDOWN_2")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  {t("DROPDOWN_3")}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-2">
              <a href="#" className="nav-link">
                {t("NAVBAR_3")}
              </a>
            </li>
          </ul>
          <div className="w-50">
          <button className="btn btn-outline-secondary mx-2 float-end " onClick={() => handleLanguage("es")}>ESP</button>
          <button className="btn btn-outline-secondary mx-2 float-end" onClick={() => handleLanguage("en")}>ENG</button>
        </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
