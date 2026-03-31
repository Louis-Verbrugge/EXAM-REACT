import { NavLink } from 'react-router';
import './Navbar.css';

export default function Navbar({ }) {
    return (
        <div className="navbar">
            <NavLink to="/recipes">Home</NavLink>
            <NavLink to="/favorite">Favorites</NavLink>
        </div>
    )
}