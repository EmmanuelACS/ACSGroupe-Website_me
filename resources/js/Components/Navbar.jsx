import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const THEME_STORAGE_KEY = 'acs-theme';

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4.2" strokeWidth="1.6" />
            <path
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"
            />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.5 14.5a8.5 8.5 0 1 1-9-11.9 7 7 0 0 0 9 11.9Z"
            />
        </svg>
    );
}

export default function Navbar() {
    const menuBtnRef = useRef(null);
    const { language, toggleLanguage, t } = useLanguage();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const additionalPanels = document.querySelectorAll('.has-additional-panel');

        const onScroll = () => {
            const isScrolled = window.scrollY >= 220;
            additionalPanels.forEach((panel) => panel.classList.toggle('mil-hide-top', isScrolled));
        };

        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Reflète l'état déjà appliqué par le script anti-flash de app.blade.php.
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
        } catch (e) {
            /* localStorage indisponible (navigation privée, etc.) : on ignore */
        }
    };

    const toggleMobileMenu = () => {
        menuBtnRef.current?.classList.toggle('mil-active');
        document.querySelector('.mil-navigation')?.classList.toggle('mil-active');
    };

    return (
        <div className="mil-top-position mil-fixed">
            <div className="mil-top-panel mil-animated fixed top-0 left-0 z-50 w-full bg-black/20! dark:bg-black/30! backdrop-blur-md border-b! border-white/10! shadow-none transition-all duration-300">
                <div className="container">
                    <Link
                        href={route('home')}
                        className="mil-logo"
                        aria-label="Access Technologies Solution (ACS)"
                        style={{ width: 150, height: 46 }}
                    />
                    <div className="mil-navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        href={route('home')}
                                        className="relative px-4 py-2 rounded-full text-white! font-bold tracking-wide text-sm border border-transparent hover:border-red-500/40 hover:bg-red-500/10 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                                    >
                                        {t('nav.home')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('services.service1')}
                                        className="relative px-4 py-2 rounded-full text-white! font-bold tracking-wide text-sm border border-transparent hover:border-red-500/40 hover:bg-red-500/10 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                                    >
                                        {t('nav.services')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('solutions.solution1')}
                                        className="relative px-4 py-2 rounded-full text-white! font-bold tracking-wide text-sm border border-transparent hover:border-red-500/40 hover:bg-red-500/10 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                                    >
                                        {t('nav.solutions')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('about')}
                                        className="relative px-4 py-2 rounded-full text-white! font-bold tracking-wide text-sm border border-transparent hover:border-red-500/40 hover:bg-red-500/10 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                                    >
                                        {t('nav.about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('gallery')}
                                        className="relative px-4 py-2 rounded-full text-white! font-bold tracking-wide text-sm border border-transparent hover:border-red-500/40 hover:bg-red-500/10 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                                    >
                                        {t('nav.gallery')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('contact')}
                                        className="rounded-full border border-red-500/40 bg-red-600/10 text-white! font-bold px-6 py-2.5 text-xs uppercase tracking-wide whitespace-nowrap transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                                    >
                                        {t('nav.contact')}
                                    </Link>
                                </li>
                            </ul>
                            <div className="mil-search-icon">
                                <svg
                                    className="w-4 h-4 text-white! [&>path]:fill-white! transition-all duration-300 drop-shadow-sm hover:text-red-500! [&:hover>path]:fill-current transform hover:-translate-y-0.5 cursor-pointer"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                    />
                                </svg>
                            </div>
                            <div className="mil-nav-toggles">
                                <button
                                    type="button"
                                    className="mil-lang-toggle text-white! border-white/30! text-xs px-2.5 py-1 rounded-md font-bold tracking-wide border cursor-pointer transition-all duration-300 drop-shadow-sm hover:text-red-500! hover:border-red-500/50! transform hover:-translate-y-0.5"
                                    onClick={toggleLanguage}
                                    aria-label="Changer de langue / Switch language"
                                    title="Français / English"
                                >
                                    <span className={language === 'fr' ? 'mil-lang-active' : ''}>FR</span>
                                    &nbsp;|&nbsp;
                                    <span className={language === 'en' ? 'mil-lang-active' : ''}>EN</span>
                                </button>
                                <button
                                    type="button"
                                    className="mil-theme-toggle p-1.5 text-white! text-sm cursor-pointer transition-all duration-300 drop-shadow-sm hover:text-red-500! transform hover:-translate-y-0.5"
                                    onClick={toggleTheme}
                                    aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
                                    title={isDark ? 'Mode clair' : 'Mode sombre'}
                                >
                                    {isDark ? <SunIcon /> : <MoonIcon />}
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className="mil-menu-btn transition-transform duration-300 hover:scale-110" ref={menuBtnRef} onClick={toggleMobileMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
