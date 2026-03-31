import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer>
            <div className='container'>
                <li><a class="text-second" routerLink="/">Home</a></li>
                <li><a class="text-second" routerLink="/favorites">Favorites</a></li>
                <p class="footer-wave__copyright text-second">&copy; 2025 Your Brand. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
