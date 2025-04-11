import { Link } from 'react-router'

import logo from '../../assets/logo.png'

import '../../styles/Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo du site SportSee" className="header__logo" />
      <nav className="header__nav nav">
        <Link to={'#'} className="nav__link">
          Accueil
        </Link>

        <Link to={'#'} className="nav__link">
          Profil
        </Link>

        <Link to={'#'} className="nav__link">
          Réglages
        </Link>

        <Link to={'#'} className="nav__link">
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header
