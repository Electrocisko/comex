import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to={"/"}
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img src="./images/isologox.png" alt="Suganoti" height="20" />
            </Link>

            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://api.whatsapp.com/send?phone=05491154115298&text=Hola, Necesito Info. Gracias!">
                <img
                  src="./images/whatsapp_3670051.png"
                  alt="Icono de whatsapp"
                  style={{ width: "25px" }}
                  className="me-2 mb-2"
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
