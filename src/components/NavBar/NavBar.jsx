import { NavLink } from 'react-router';
import styles from './Navbar.module.scss';

export default function Navbar({ }) {
    return (
        <div className={styles.navbar}>
            <NavLink to="/recipes">Home</NavLink>
            <NavLink to="/favorite">Favorites</NavLink>
        </div>
    )
}