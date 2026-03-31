import { NavLink } from 'react-router';
import styles from './Navbar.module.scss';

export default function Navbar({ }) {
    return (
        <div className={styles.navbar}>
            <NavLink to="/recipes">
                <i className="fa-solid fa-house"></i> Home
            </NavLink>
            
            <NavLink to="/favorite">
                <i className="fa-solid fa-heart"></i> Favorites
            </NavLink>
        </div>
    )
}