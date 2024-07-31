import logo from "../../assest/img/icono.png"
import CartWidget from "./CartWidget"
import React from 'react'
import "./NavBar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">

        <Link to="/" className="brand">
            <img className="brandIcon" src={logo} alt="kiki" />
            <p>KIKI'S HARDWARE</p>
        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">

            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
            <Link to="/categoria/procesador" className="nav-link" href="#">Procesadores</Link>
            <Link to="/categoria/gabinete" className="nav-link" href="#">Gabinetes</Link>
            <Link to="/categoria/gpu" className="nav-link" href="#">GPU</Link>
            <Link to="/categoria/ram" className="nav-link" href="#">Rams</Link>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perifericos
              </Link>
              <ul class="dropdown-menu">
                <li><Link to="/categoria/mouse" class="dropdown-item" href="#">Mouse</Link></li>
                <li><Link to="/categoria/teclado" class="dropdown-item" href="#">teclados</Link></li>
              </ul>
            </li>

          </div>

        </div>

        <CartWidget />

      </div>

    </nav>

  )

}

export default NavBar 