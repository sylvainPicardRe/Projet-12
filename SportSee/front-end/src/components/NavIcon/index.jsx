import { Link } from 'react-router'

function NavIcon({ iconList }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {iconList.map((icon, index) => (
          <li className="nav__item" key={index}>
            <Link className="nav__link">
              <img
                className="nav__image"
                src={icon}
                alt={`icone ${index} du menu`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavIcon
