import './Logo.css';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className='logo-container'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'logo active' : 'logo')}
      >
        <img src='/assets/space.png' alt='logo' className='logo' />
      </NavLink>
    </div>
  );
};
