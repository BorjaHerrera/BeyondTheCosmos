import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header id='header'>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/picture'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              PICTURE OF THE DAY
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/library'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              DISCOVERY GALLERY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
