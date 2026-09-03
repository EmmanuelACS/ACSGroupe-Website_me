import { Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Navbar() {
    const menuBtnRef = useRef(null);

    useEffect(() => {
        const panels = document.querySelectorAll('.mil-top-panel.mil-animated');
        const additionalPanels = document.querySelectorAll('.has-additional-panel');

        const onScroll = () => {
            const scrolled = window.scrollY >= 220;
            panels.forEach((panel) => panel.classList.toggle('mil-top-panel-transparent', !scrolled));
            additionalPanels.forEach((panel) => panel.classList.toggle('mil-hide-top', scrolled));
        };

        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMobileMenu = () => {
        menuBtnRef.current?.classList.toggle('mil-active');
        document.querySelector('.mil-navigation')?.classList.toggle('mil-active');
    };

    return (
        <div className="mil-top-position mil-fixed">
            <div className="mil-top-panel mil-top-panel-transparent mil-animated">
                <div className="container">
                    <Link href={route('home')} className="mil-logo" style={{ width: 140 }} />
                    <div className="mil-navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link href={route('home')}>Accueil</Link>
                                </li>
                                <li>
                                    <Link href={route('services.service1')}>Services</Link>
                                </li>
                                <li className="mil-has-children">
                                    <Link href={route('solutions.solution1')}>Solutions</Link>
                                    <ul>
                                        <li>
                                            <Link href={route('solutions.solution1')}>Solution 1</Link>
                                        </li>
                                        <li>
                                            <Link href={route('solutions.solution2')}>Solution 2</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={route('about')}>A propos</Link>
                                </li>
                                <li>
                                    <Link href={route('contact')}>Contact</Link>
                                </li>
                            </ul>
                            <div className="mil-search-icon">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                    />
                                </svg>
                            </div>
                        </nav>
                    </div>
                    <div className="mil-menu-btn" ref={menuBtnRef} onClick={toggleMobileMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
