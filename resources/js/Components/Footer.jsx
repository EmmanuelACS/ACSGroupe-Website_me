import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';

// Coordonnées de repli si /admin/settings n'a pas encore été renseigné.
const CONTACT_FALLBACK = {
    email: 'Accesstechnology@acsgroupe.ci',
    phones: ['(+225) 07 77 44 91 91', '(+225) 27 22 54 81 81'],
    address: 'Abidjan, Cocody Danga, Côte d’Ivoire',
};

const SOCIAL_LABELS = [
    { key: 'socialFacebook', name: 'Facebook', short: 'FB' },
    { key: 'socialInstagram', name: 'Instagram', short: 'IG' },
    { key: 'socialLinkedin', name: 'LinkedIn', short: 'IN' },
    { key: 'socialTwitter', name: 'Twitter', short: 'TW' },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const { t } = useLanguage();
    const { siteSettings } = usePage().props;

    const CONTACT = {
        email: siteSettings?.contactEmail || CONTACT_FALLBACK.email,
        phones: [
            siteSettings?.contactPhonePrimary || CONTACT_FALLBACK.phones[0],
            siteSettings?.contactPhoneSecondary || CONTACT_FALLBACK.phones[1],
        ],
        address: siteSettings?.contactAddress || CONTACT_FALLBACK.address,
    };

    const submitSubscribe = (e) => {
        e.preventDefault();
        // Newsletter — pas de backend dédié dans le template d'origine.
        setEmail('');
    };

    return (
        <footer className="mil-dark-bg rounded-t-3xl overflow-hidden">
            <img src="/img/deco/map.png" alt="background" className="mil-footer-bg" />
            <div className="container">
                <div className="mil-footer-content mil-p-120-90">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4 mil-mb-30">
                            <img src="/img/logo/logo-light.png" alt="Access Technologies Solution (ACS)" className="mil-logo mil-mb-30" style={{ width: 160, height: 'auto' }} />

                            <p className="mil-light-soft mil-mb-30">{t('footer.tagline')}</p>

                            <ul className="mil-light-soft mil-mb-30" style={{ listStyle: 'none', padding: 0 }}>
                                <li className="mil-mb-5">
                                    <span className="mil-accent">{t('contactInfo.email')} : </span>
                                    <a href={`mailto:${CONTACT.email}`} className="mil-light-soft">
                                        {CONTACT.email}
                                    </a>
                                </li>
                                <li className="mil-mb-5">
                                    <span className="mil-accent">{t('contactInfo.phone')} : </span>
                                    <a href={`tel:${CONTACT.phones[0].replace(/[^+\d]/g, '')}`} className="mil-light-soft">
                                        {CONTACT.phones[0]}
                                    </a>{' '}
                                    /{' '}
                                    <a href={`tel:${CONTACT.phones[1].replace(/[^+\d]/g, '')}`} className="mil-light-soft">
                                        {CONTACT.phones[1]}
                                    </a>
                                </li>
                                <li>
                                    <span className="mil-accent">{t('contactInfo.address')} : </span>
                                    {CONTACT.address}
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-7 mil-mt-60-adapt">
                            <div className="row">
                                <div className="col-lg-7 mil-mb-30">
                                    <h3 className="mil-light mil-up-font mil-mb-30">
                                        {t('footer.join')} <span className="mil-accent">{t('footer.company')}</span> <br />
                                        {t('footer.experience')}
                                    </h3>
                                    <p className="mil-light-soft">{t('footer.newsletterText')}</p>
                                </div>
                                <div className="col-lg-5 mil-mb-30 bg-slate-800/60 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/60 dark:border-white/10 shadow-lg shadow-black/10">
                                    <form onSubmit={submitSubscribe} className="flex flex-col gap-4 w-full max-w-md">
                                        <input
                                            className="w-full bg-slate-900/90 dark:bg-slate-950/90 border-2 border-slate-600/70 dark:border-slate-700 rounded-full! px-6 py-3 text-sm text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all duration-300 shadow-sm"
                                            type="email"
                                            placeholder={t('footer.emailPlaceholder')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button className="w-full rounded-full! border border-red-500/40 bg-red-600/10 text-white font-bold text-sm py-3 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 cursor-pointer">
                                            <span>{t('cta.subscribeNow')}</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mil-divider mil-light"></div>

                <div className="mil-footer-links">
                    <ul className="mil-social mil-light">
                        {SOCIAL_LABELS.map((social) => (
                            <li className="mil-adapt-links" key={social.key}>
                                <a href={siteSettings?.[social.key] || '#.'} target="_blank" rel="noopener noreferrer">
                                    {social.name}
                                </a>
                                <a href={siteSettings?.[social.key] || '#.'} target="_blank" rel="noopener noreferrer">
                                    {social.short}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="mil-additional-links mil-light">
                        <li>
                            <a href="#.">{t('footer.terms')}</a>
                        </li>
                        <li>
                            <a href="#.">{t('footer.privacy')}</a>
                        </li>
                        <li>
                            <a href="#.">{t('footer.sitemap')}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mil-footer-bottom">
                <div className="container">
                    <p className="mil-text-sm mil-light">© Access Technologies Solution (ACS) 2026.</p>
                    <p className="mil-text-sm mil-light">{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}
