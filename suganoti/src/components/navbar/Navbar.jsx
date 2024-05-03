import { useTranslation } from "react-i18next";
import { Link, useNavigate} from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleLanguage = (la) => {
    i18n.changeLanguage(la);
   // navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
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
          <ul className="navbar-nav w-100 ">
            <li className="nav-item ms-2">
              <Link className="nav-link" to={"/nosotros"}>
                {t("NAVBAR_1")}
              </Link>
            </li>

                        <li className="nav-item ms-2">
              <Link to={"/importacion"} className="nav-link">
                {t("NAVBAR_2")}
              </Link>
            </li>            <li className="nav-item ms-2">
              <Link to={"/exportacion"} className="nav-link">
                {t("NAVBAR_3")}
              </Link>
            </li>            <li className="nav-item ms-2">
              <Link to={"/servicios"} className="nav-link">
                {t("NAVBAR_4")}
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link to={"/contact"} className="nav-link">
                {t("NAVBAR_5")}
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
