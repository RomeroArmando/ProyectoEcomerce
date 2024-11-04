import logo from "../../assest/img/icono.png"
import CartWidget from "./CartWidget"
import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">

        <Link to="/" className="brand">
            <img className="brandIcon" src={logo} alt="kiki" />

        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">

            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
            
            
            <Link to="/categoria/Abrigos" className="nav-link" href="#">Abrigos</Link>
            
            <Link to="/categoria/Conjuntos" className="nav-link" href="#">Conjuntos</Link>
            
            <Link to="/categoria/Vestidos" className="nav-link" href="#">Vestidos</Link>
            
            <Link to="/categoria/Carteras" className="nav-link" href="#">Carteras</Link>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Superior
              </Link>
              <ul class="dropdown-menu">
                <li><Link to="/categoria/Camisas" className="nav-link" href="#">Camisas</Link></li>
                <li><Link to="/categoria/Chombas" className="nav-link" href="#">Chombas</Link></li>
                <li><Link to="/categoria/Remeras" className="nav-link" href="#">Remeras</Link></li>
                <li><Link to="/categoria/Muscolosas" className="nav-link" href="#">Musculosas</Link></li>
                <li><Link to="/categoria/Top" className="nav-link" href="#">Tops</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inferior
              </Link>
              <ul class="dropdown-menu">
                <li><Link to="/categoria/Shorts" className="nav-link" href="#">Shorts</Link></li>
                <li><Link to="/categoria/Jeans" className="nav-link" href="#">Jeans</Link></li>
                <li><Link to="/categoria/Polleras" className="nav-link" href="#">Polleras</Link></li>
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