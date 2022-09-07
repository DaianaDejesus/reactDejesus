import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export const NavBar = () =>  {

  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

              <Link to="/" className="navbar-brand animate__animated animate__bounce" >
                  <img src="./logoPeperina.png" alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productos">Productos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productos/madera">Maderas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productos/ceramica">Cerámicas</Link>
                  </li>
                </ul>
                <CartWidget />

              </div>
            </div>
        </nav>
    )
}