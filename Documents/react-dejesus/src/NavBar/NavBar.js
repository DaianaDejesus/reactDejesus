import './NavBar.css'
import CartWidget from "./CartWidget"

const NavBar = () =>  {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand animate__animated animate__bounce" href="./index.html">
                  <img src="./logoPeperina.png" alt="logo"/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contactos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Nuestra historia</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Preguntas frecuentes</a>
                  </li>
                <li className="nav-item">
                    <CartWidget/>
                </li>
                </ul>

              </div>
            </div>
        </nav>
    )
}

export default NavBar