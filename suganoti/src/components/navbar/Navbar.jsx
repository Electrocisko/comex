import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguage = (la) => {
    i18n.changeLanguage(la);
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="./src/assets/images/iso.png"
            alt="Suganoti"
            width="30"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                {t("NAVBAR_1")}
              </a>
            </li>
            <li className="nav-item dropdown">
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
            <li className="nav-item">
              <a href="#" className="nav-link">
                {t("NAVBAR_3")}
              </a>
            </li>
          </ul>
          <div>
          <button className="btn btn-outline-secondary mx-2" onClick={() => handleLanguage("es")}>ESP</button>
          <button className="btn btn-outline-secondary mx-2" onClick={() => handleLanguage("en")}>ENG</button>
        </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
