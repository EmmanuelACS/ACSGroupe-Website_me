import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from '@/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'acs-language';

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    // Restore a previously chosen language (client-side only).
    useEffect(() => {
        const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
        if (saved === 'fr' || saved === 'en') {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('lang', language);
        }
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, language);
        }
        console.info('[LanguageContext] Switched language to:', language);
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
    }, []);

    // t('nav.home') -> looks up translations.fr.nav.home / translations.en.nav.home
    const t = useCallback(
        (key, fallback = '') => {
            const path = key.split('.');
            let node = translations[language];
            for (const segment of path) {
                node = node?.[segment];
                if (node === undefined) break;
            }
            return node ?? fallback ?? key;
        },
        [language]
    );

    const value = useMemo(() => ({ language, toggleLanguage, setLanguage, t }), [language, toggleLanguage, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
