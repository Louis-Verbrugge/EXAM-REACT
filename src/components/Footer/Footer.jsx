import './Footer.css';

export function Footer() {
    return (

        <div>
            <div class="footer-divider" aria-hidden="true">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 V100 H0 Z"></path>
                </svg>
            </div>

            <footer class="footer-wave" role="contentinfo">
                <div class="container">
                    <div class="footer-wave__main-grid">
                        <div class="footer-wave__about">
                            <h3 class="footer-wave__heading">About Us</h3>
                            <span class="text-second">Louis, Charles, Dan and Quentin are cooking right now.</span>
                        </div>
                        <div class="footer-wave__links">
                            <h3 class="footer-wave__heading">Navigate</h3>
                            <ul>
                                <li><a class="text-second" routerLink="/">Home</a></li>
                                <li><a class="text-second" routerLink="/about">About</a></li>
                                <li><a class="text-second" routerLink="/services">Services</a></li>
                                <li><a class="text-second" routerLink="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-wave__links">
                            <h3 class="footer-wave__heading">Resources</h3>
                            <ul>
                                <li><a class="text-second" routerLink="/blog">Blog</a></li>
                                <li><a class="text-second" routerLink="/faq">FAQ</a></li>
                                <li><a class="text-second" routerLink="/support">Support</a></li>
                            </ul>
                        </div>
                        <div class="footer-wave__links">
                            <h3 class="footer-wave__heading">Legal</h3>
                            <ul>
                                <li><a class="text-second" routerLink="/privacy-policy">Privacy Policy</a></li>
                                <li><a class="text-second" routerLink="/terms-of-service">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-wave__bottom">
                        <p class="footer-wave__copyright text-second">&copy; 2025 Your Brand. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
