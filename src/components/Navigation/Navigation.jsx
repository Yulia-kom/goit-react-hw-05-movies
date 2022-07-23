import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return;
  <>
    <Nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </Nav>
    <Outlet />
  </>;
};

export default Navigation;
