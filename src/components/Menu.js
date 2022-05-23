import React from "react"
import { useState } from "react"
import '../ressources/css/Menu.css'
import Logo from '../ressources/images/logo.svg'

function Menu() {
  const [showLinks, setShowLinks] = useState(false)

  const logout = () => {
        sessionStorage.removeItem("token");
      }
  
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">
          <img  src={Logo} alt="Logo Qwild" className="d-inline-block align-top mr-3" /> 
      	  <span>The stores.</span>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1 ">
          <a href="/" className="navbar__link">
            Login
          </a>
        </li>
        <li className="navbar__item slideInDown-2 ">
          <a href="/home" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/fridge" className="navbar__link">
            Fridge
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/profil" className="navbar__link">
            Profil
          </a>
        </li>
        <li className="navbar__item slideInDown-5">
          <a href="/logout" className="navbar__link" onClick={logout}>
            Logout
          </a>

        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Menu