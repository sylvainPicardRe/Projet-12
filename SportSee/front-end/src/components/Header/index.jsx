import { Link } from 'react-router'

import logo from '../../assets/logo.png'

import '../../styles/Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo du site SportSee" className="header__logo" />
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={'#'} className="nav__link">
              Accueil
            </Link>
          </li>
          <li className="nav__item">
            <Link to={'#'} className="nav__link">
              Profil
            </Link>
          </li>
          <li className="nav__item">
            <Link to={'#'} className="nav__link">
              Réglages
            </Link>
          </li>
          <li className="nav__item">
            <Link to={'#'} className="nav__link">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
